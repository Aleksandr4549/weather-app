import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import CitySelectContainer from '../CitySelect/CitySelectContainer';
import LargeCard from '../Card/LargeCard/LargeCard';
import OopsPage from '../OopsPage/OopsPage';
import cities from '../../common/cities';
import transformPressure from '../../common/transformPressure';
import style from './App.module.scss';

const App = () => {
  const [state, setState] = useState({
    cityData: null,
    isError: false
  });

  const setSelectedCityData = data => {
    setState({cityData: data})
  }

  return (
    <div className={style.app} >
      <Header />
      <Switch>
        <Route 
          exact 
          path={'/'} 
          render={() => (
            <CitySelectContainer 
              cities={cities} 
              setSelectedCityData={setSelectedCityData}
              cityData={state.cityData} 
          />)} 
        />

        <Route path={'/largeCard'}> 
          {state.cityData &&
            <LargeCard 
              name={state.cityData.nameRu}
              temp={state.cityData.data.main.temp}
              feelsLike={state.cityData.data.main.feels_like}
              weatherDescription={state.cityData.data.weather[0].description}
              pressure={transformPressure(state.cityData.data.main.pressure)}
              humidity={state.cityData.data.main.humidity}
              windSpeed={state.cityData.data.wind.speed}
            />
          }
        </Route>

        <Route path={'/oops'} render={() => <OopsPage />} />
      </Switch>
    </div>
  );
}

export default App;
