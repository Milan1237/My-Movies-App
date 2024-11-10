import * as React from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { FilterMoviesFromServer, getMovies } from '../api/movies';

function Dropdown({name, values , setGlobal}) {
  const dispatch = useDispatch();
  const {searchValue , genre , rating} = useSelector(state=> state.movie);
  const handleChange = (event) => {
    dispatch(setGlobal(event.target.value));
    
  };
  console.log('dropdown re-rendered');
  useEffect(()=>{
    if(searchValue == ''){
      if(genre!= '' || rating !=''){
        dispatch(FilterMoviesFromServer({genre , rating}))
      }
      else{
        dispatch(getMovies());
      }
    }
    
  } , [genre , rating , searchValue]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        defaultValue={''}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          Object.keys(values).map(value=>
            <MenuItem key={value} value={value}>{values[value]}</MenuItem>
           )
        }
        
      </Select>
    </FormControl>
  );
}

export default React.memo(Dropdown);
