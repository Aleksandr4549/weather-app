import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import CitySelect from './CitySelect';
import SmallCard from '../Card/SmallCard/SmallCard';
import Loader from '../Loader/Loader';
import { getWeather } from '../../api/api';

const SelectCityContainer = ({cities, cityData, setSelectedCityData}) => {
  const [state, setState] = useState({
    isFetching: false,
    selectedCityId: null,
    isError: false
  });

  useEffect(() => {
      if(state.selectedCityId) {
        setState(state => ({...state, isFetching: true}))
        getWeather(state.selectedCityI)
          .then(res => {
            const city = cities.filter(city => city.id === state.selectedCityId)[0];
            city.data = res.data
            setSelectedCityData(city)
            setState(state => ({...state, isFetching: false}))
          })
          .catch(err => {
            console.log(err);
            setState({selectedCityId: null, isFetching: false, isError: true});
          })
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

  if(state.isError) {
    return <Redirect to='oops' />
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