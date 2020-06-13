import React from 'react';
import PropTypes from 'prop-types';

import BackButton from '../../Buttons/BackButton'
import style from './LargeCard.module.scss';

const LargeCard = ({
  name,
  temp,
  feelsLike,
  weatherDescription,
  pressure,
  humidity,
  windSpeed
}) => {
  return (
    <div className={style.container}>
      <BackButton url='/' />
      <div className={style.title}>
        <h3>{name}</h3>
      </div>

      <div className={style.temp__container}>
        <div>
          <span className={style.current__temp}>{Math.round(temp)}{'\u00b0'}C</span>
        </div>
        <div>
          <span>По ощущениям: {Math.round(feelsLike)}{'\u00b0'}C</span>
        </div>
      </div>

      <div className={style.description}>{weatherDescription}</div>

      <div>Давление: {pressure} мм. рт.</div>
      <div>Влажность: {humidity}%</div>
      <div>Ветер: {windSpeed} м\с</div>
    </div>
  );
}

LargeCard.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  feelsLike: PropTypes.number,
  weatherDescription: PropTypes.string,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  windSpeed: PropTypes.number
}

export default LargeCard;