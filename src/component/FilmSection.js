import React from 'react';
import FilmBackground from './FilmBackground';
import classes from '../css/filmcontainer.module.css'

const FilmSection = ( ) => {
  return (
    <div className={classes.boxContainer}>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
      <FilmBackground/>
    </div>
  )
};

export default FilmSection;
