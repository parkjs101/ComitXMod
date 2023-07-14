import React from 'react';
import FilmBackground from './FilmBackground';
import classes from '../css/filmcontainer.module.css'

const FilmContainer = () => {
  const index = ['1','2','3','4','5','6','7','8']
    const itemList = index.map((index)=> (<FilmBackground index={index} key = {index}/>))
  return (
    <div className={classes.boxContainer}>
      {itemList}
    </div>
  )
};

export default FilmContainer;
