const transformPressure = pressure => {
  return Math.round(pressure / 1.333)
};

export default transformPressure;