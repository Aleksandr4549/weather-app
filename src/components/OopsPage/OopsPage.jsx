import React from 'react';

import BackButton from '../Buttons/BackButton';
import style from './OopsPage.module.scss';

const OopsPage = () => {
  return (
    <div className={style.oops}>
      <BackButton url='/' />
    </div>
  )
};

export default OopsPage;