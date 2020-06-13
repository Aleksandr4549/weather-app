import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
    : isoCode;
}

const useStyles = makeStyles(theme => ({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 16,
    },
  },
  root: {
    '& > label': {
      color: '#fff',
    },
    '& .MuiAutocomplete-popupIndicator': {
      color: '#fff'
    },
    '& .MuiIconButton-root': {
      color: '#fff'
    },
    '& .MuiInputBase-root': {
      color: '#fff',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#fff'
    },
  }
}));

function CitySelect(props) {
  const classes = useStyles();
  return (
    <Autocomplete
      onSelect={(select) => props.onSelectHandler(select.target.value)}
      id="country-select-demo"
      style={{ width: '80%', margin: 'auto'}}
      options={props.cities}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(city) => city.nameRu}
      renderOption={(city) => (
        <React.Fragment>
          <span>{countryToFlag(city.nameRu)}</span>
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={{root: classes.root}}
          common='white'
          label="Выберите город"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default CitySelect;