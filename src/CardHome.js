
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/c8558d68d7e62fac90c9/pets/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {data.map(pets => (
        <div key={pets.id} style={{ padding: '10px' }}>
        <img className="card-img-top" src={pets.image} alt="news item" />
          <h2>{pets.name}</h2>
          <p>{pets.age}</p>
          <p>{pets.vaccinated}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;