import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { getUserDetail } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsStarFill,
  BsMap,
  BsEnvelope,
} from 'react-icons/bs';
import '../Sass/Styles/UserDetails.scss';

export default function UserDetails(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user);

  function genderIcon(gender) {
    if (gender === 'Male') {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === 'Female') {
      return <BsGenderFemale className="femaleGender" />;
    }
  }

  useEffect(() => {
    dispatch(getUserDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  // falta condicion de pago para mostrar toda la info o primeara parte

  return (
    <>
      <div>
        {user ? (
          <div className="UserDetails">
            <img
              src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999"
              alt="User Image"
            />
            <h2>
              {user.name} {user.lastName} {genderIcon(user.genre)}
            </h2>
            <p className="age">{user.age} years old</p>

            <p className="about">{user.about}</p>
            <hr />
            <div className="moreInfo">
              <h4>
                <BsStarFill className="icon" /> {user.calification} / 5
              </h4>
              <h4>
                <BsFillTelephoneFill className="icon" /> {user.telephone}
              </h4>
              <h4>
                {' '}
                <BsEnvelope className="icon" /> {user.email}
              </h4>
              <h4>
                <BsFacebook className="icon" /> {user.facebook}
              </h4>
              <h4>
                {' '}
                <BsInstagram className="icon" /> {user.instagram}
              </h4>
              <h4>
                <BsMap className="icon" /> {user.street}, {user.city},{' '}
                {user.province}
              </h4>
            </div>
            {
              <div>
                <Post />
              </div>
            }
          </div>
        ) : (
          <p> Loading...</p>
        )}
        <Link to="/home">
          <button className="buttonBlue">Back</button>
        </Link>
      </div>
    </>
  );
}
