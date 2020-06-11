import React from 'react';
import classes from './GifItem.module.css';

const GifItem = ({gif, onGifSelect}) => {
  return (
    <div className={classes.GifItem} onClick={() => onGifSelect(gif)}>
      <img className={classes.GifImage} src={gif.images.downsized.url} />
    </div>
  )
};

export default GifItem;
