import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/Home.scss';
// import header from "../img/header.png";
import navigator from '../img/navigator.svg';
import group2 from '../img/group2.png';
import SearchBarHome from './SearchBarHome';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="Homepage">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <div>{/* <SearchBarHome /> */}</div>
      <section>
        <img className="homepageImage" src={navigator} alt="Home" />
        <article>
          <h1>
            <FormattedMessage
              id="home.save"
              defaultMessage="Save money while driving"
            />
          </h1>

          <p className="description">
            <FormattedMessage
              id="home.paragraph1"
              defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
              dollars * of your passengers. You will only need a couple of minutes
              to publish your route. Do we share a trip?"
            />
            <p className="detail">
              <FormattedMessage
                id="home.paragraph2"
                defaultMessage="* Average amount received by drivers in 2021."
              />
            </p>
          </p>
          {/* 
          {
            <NavLink
              to={
                !users.dni
                  ? '/register'
                  : users.name && users.cars.length === 0
                  ? '/car'
                  : users.name && users.cars[0].patent
                  ? '/route'
                  : ''
              }
            >
              <button className="button">
                <FormattedMessage id="menu.post" defaultMessage="Post a Trip" />
              </button>
            </NavLink>
          } */}
          <div>
            {
              <NavLink to="/route-list">
                <button className="button">
                  <FormattedMessage
                    id="home.routes"
                    defaultMessage="See all routes available!"
                  />
                </button>
              </NavLink>
            }
          </div>
        </article>
      </section>
    </div>
  );
}
