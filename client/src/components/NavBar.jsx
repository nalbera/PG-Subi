import React, {useContext} from 'react';
import { useEffect } from "react";
import Logo from "../img/logo.png";
import { Profile } from "./Profile";
import SearchUserByName from "./SearchUserByName";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./Auth";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { getUserDetail } from "../actions";
import "../Sass/Styles/NavBar.scss";
import es from "./../img/spain.png"
import en from "./../img/united-kingdom.png"
import {FormattedMessage} from 'react-intl';
import {langContext} from './../context/langContext.js';


function Nav() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const { user, isAuthenticated } = useAuth0();
  const id = isAuthenticated ? user.email : "";
  const idioma = useContext(langContext);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <> <div>
      <nav className="NavBar">
        <div className="GimmeARide">
          <div className="izquierda">
            <Link to="/home">
              <img className="logoSubi" src={Logo} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/home" className="nombreSubi">
						<FormattedMessage
							id="navBar.name"
							defaultMessage="Gimme a Ride"
						/>
					</Link>
          <Link to="/">
						<FormattedMessage
							id="navBar.home"
							defaultMessage="Home"
						/>
					</Link>
          </div>
        </div>
        <div className="searchContainer">
          {
            <NavLink
              className="searchContainerItem"
              to={
                !users.dni
                  ? "/register"
                  : users.name && users.cars.length === 0
                  ? "/car"
                  : users.name && users.cars[0].patent
                  ? "/route"
                  : ""
              }
            >
             <button className="button">
              <FormattedMessage
							id="navBar.post"
							defaultMessage="Post a Trip"
						/>
            </button>
            </NavLink>
          }
        </div>
        <div>
          <SearchUserByName />
        </div>
        <div className="perfylog">
          <div className="profile">
            <Profile />
          </div>
          <div className="logs">
            <Auth />
          </div>
        </div>
        <div className="banderas">
      <button onClick={() => idioma.establecerLenguaje("es-AR")}><img src={es} alt=""></img></button>
      <button onClick={() => idioma.establecerLenguaje("en-US")}><img src={en} alt=""></img></button>
				</div>
      </nav>
      </div>
    </>
  );
}

export default Nav;
