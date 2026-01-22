import React from 'react';

const Card = ({id, name, designation}) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' >
      <img alt="robots" src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Card;
