import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import style from './BackButton.module.scss';

const BackButton = ({url}) => {
  return <Link to={url} className={style.link}><ArrowBackIosIcon /></Link>
};

BackButton.propTypes = {
  url: PropTypes.string.isRequired
}

export default BackButton;