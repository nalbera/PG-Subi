import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import CardCar from "./CardCar";
import CardFullUser from "./CardFullUser";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import {FormattedMessage} from 'react-intl';

export default function UserDetails(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  // falta condicion de pago para mostrar toda la info o primeara parte

  return (
    <div>
      {/* <button onClick={}>editar</button> */}
      <div>
        <div>
          {user ? (
            <CardFullUser
              name={user.name}
              lastName={user.lastName}
              email={user.email}
              genre={user.genre}
              photo={user.photo}
              age={user.age}
              about={user.about}
              telephone={user.telephone}
              facebook={user.facebook}
              instagram={user.instagram}
              street={user.street}
              city={user.city}
              province={user.province}
              calification={user.calification}
            />
          ) : (
            ""
          )}
        </div>
        <div>{<Post />}</div>
        <hr />
        <div>
          {user.cars && user.cars.length > 0 ? (
            <CardCar
              patent={user.cars[0].patent}
              brand={user.cars[0].brand}
              model={user.cars[0].model}
              color={user.cars[0].color}
            />
          ) : (
            ""
          )}
        </div>
        {/* <p> Loading...</p> */}
      </div>
      <Link to="/home">
        <button className="buttonBlue">
        <FormattedMessage
							id="userDetails.back"
							defaultMessage="Back"
						/></button>
      </Link>
    </div>
  );
}
