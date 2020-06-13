import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CitySelect from './CitySelect';
import SmallCard from '../Card/SmallCard/SmallCard';
import Loader from '../Loader/Loader';
import { getWeather } from '../../api/api';

const SelectCityContainer = ({cities, cityData, setSelectedCityData}) => {
  const [state, setState] = useState({
    isFetching: false,
    selectedCityId: null,
  });

  useEffect(() => {
      if(state.selectedCityId) {
        setState(state => ({...state, isFetching: true}))
        getWeather(state.selectedCityId)
          .then(res => {
            const city = cities.filter(city => city.id === state.selectedCityId)[0];
            city.data = res.data
            city.timeRequest = Date.now()
            setSelectedCityData(city)
            setState(state => ({...state, isFetching: false}))
          })
          .catch(err => console.log(err))
      }
  }, [state.selectedCityId, cities])

  const onSelectHandler = value => {
    if(!value) return
    const selectedCity = cities.filter(city => city.nameRu === value)[0];
    if(selectedCity) {
      setState(state => ({...state, selectedCityId: selectedCity.id}))
    }
  }

  if(state.isFetching) {
    return <Loader />
  }

  return (
    <div>
      <CitySelect 
        onSelectHandler={onSelectHandler}
        cities={cities} 
      />
      {cityData !== null && <SmallCard cityData={cityData} />}
    </div>
  );
}

SelectCityContainer.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedCityData: PropTypes.func.isRequired
}

export default SelectCityContainer;