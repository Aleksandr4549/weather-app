import React from 'react';

import BackButton from '../Buttons/BackButton';
import style from './OopsPage.module.scss';

const OopsPage = () => {
  return (
    <div className={style.oops}>
      <BackButton url='/' />
      <p>Sorry, something went wrong</p>
    </div>
  )
};

export default OopsPage;