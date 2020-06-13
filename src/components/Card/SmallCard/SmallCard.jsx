import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './SmallCard.module.scss';

const SmallCard = ({cityData}) => {
  if(!cityData) return <div>404</div>

  return (
    <div className={style.container}> 
      <h4>{cityData.nameRu}</h4>
      <div className={style.degrees}>{Math.round(cityData.data.main.temp)}{'\u00b0'}C</div>
      <div className={style.temp__range__container}>
        <div className={style.temp__range__min}>
          <span>{Math.round(cityData.data.main.temp_min)}</span>
          <span>min</span>
        </div>
        <div className={style.temp__range__max}>
          <span>{Math.round(cityData.data.main.temp_max)}</span>
          <span>max</span>
        </div>
      </div>
      <Link to={'/largeCard'}>подробнее...</Link>
    </div>
  );
}

SmallCard.propTypes = {
  cityData: PropTypes.exact({
    data: PropTypes.shape({
      base: PropTypes.string,
      clouds: PropTypes.object,
      cod: PropTypes.number,
      coord: PropTypes.object,
      dt: PropTypes.number,
      id: PropTypes.number.isRequired,
      main: PropTypes.shape({
        feels_like: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        temp: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
      sys: PropTypes.object,
      tymezone: PropTypes.number,
      vizibility: PropTypes.number,
      weather: PropTypes.arrayOf(PropTypes.object),
      wind: PropTypes.shape({
        deg: PropTypes.number,
        speed: PropTypes.number.isRequired
      })
    }),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nameRu: PropTypes.string.isRequired,
    timeRequest: PropTypes.number
  })
}

export default SmallCard;