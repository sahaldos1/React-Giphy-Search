import React from 'react';
import GifView from './GifView';

const GifContainer = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifView key={image.id} gif={image} />
  });

  return (
    <div className="gif-container">{gifItems}</div>
  );
};

export default GifContainer;