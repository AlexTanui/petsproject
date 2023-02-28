import React from 'react';
import myImage from './images/user-solid.svg';
import Card from './CardHome';

const Home = ({ username }) => {
  return (
    <div>
      <section className='topbar'>
          <h1>Welcome, {username}!</h1>
          <img src={myImage} alt="my image" />
          <p>Username: {username}</p>   
      </section>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.rd.com/wp-content/uploads/2019/11/steve-greig-portrait-scaled.jpg"
          alt=""
        />
      </div>
        <Card />
    </div>
    </div>
  );
};

export default Home;
