import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import autitos from '../img/autitos.png';
import Logo from '../img/logo.png';
import { Profile } from './Profile';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './Auth';
import { NavLink } from 'react-router-dom';
import { getUserProfile, getAllUsers } from '../actions';
import { BsPlusCircle } from 'react-icons/bs';
import '../Sass/Styles/NavBar.scss';
import { FormattedMessage } from 'react-intl';
import { langContext } from './../context/langContext.js';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';

export default function Nav() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userpro);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const id = isAuthenticated ? user.email : '';
  const idioma = useContext(langContext);
  const { usuariosRegistrados } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [users.photo, users.cars && users.cars.length]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  function handleClick() {
    if (!isAuthenticated) {
      return new Swal({
        icon: 'warning',
        title: 'Sorry',
        text: 'You need to be logged in to post a trip!',
        confirmButtonText: 'Alright',
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithRedirect();
        }
      });
    } else {
      if (!users.dni) { 
        return new Swal({
          icon: 'warning',
          title: 'Sorry',
          text: 'You need to be registered to post a trip!',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.isConfirmed) {
            history.push('/register');
          }
        });
 
      }
      else if (users.name && users.cars.length === 0) {
        return new Swal({
          icon: 'warning',
          title: 'Sorry',
          text: 'Please give us your car information',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.isConfirmed) {
            history.push('/car');
          }
        });
      
      }
      else if (users.name && users.cars && users.cars[0].patent)
        history.push('/route');
    }

    // (!users.dni ? history.push('/register') : users.name && users.cars.length === 0 ? history.push('/car') : users.name && users.cars[0].patent ? history.push('/route'))
  }
  console.log(users, 'soy navbar');
  return (
    <header className="NavBar">
      <NavLink to="/home">
        <img className="autitos" src={autitos} alt="" />
        <img className="logo" src={Logo} alt="" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <button className="postNavLink" onClick={handleClick}>
              <BsPlusCircle className="BsPlusCircle" />
              <h3>
                <FormattedMessage
                  id="navBar.post"
                  defaultMessage="Post a Trip"
                />
              </h3>
            </button>
          </li>

          <li className="barrita">|</li>

          <li className="profile">
            <Profile />
          </li>
          <li>
            <Auth />
          </li>
        </ul>

        {/* <div className="banderas">
            <button onClick={() => idioma.establecerLenguaje("es-AR")}>
            <img src={es} alt=""></img>
            </button>
            <button onClick={() => idioma.establecerLenguaje("en-US")}>
            <img src={en} alt=""></img>
            </button>
          </div> */}
        {isAuthenticated &&
        usuariosRegistrados
          .map((e) => e.email)
          .filter((e) => e === user.email)[0] === user.email &&
        users.isAdmin === true ? (
          <NavLink to="/Admin">Admin</NavLink>
        ) : null}
      </nav>
    </header>
  );
}
