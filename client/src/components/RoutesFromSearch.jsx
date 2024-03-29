import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRoutes } from "../actions";
import CardRoute from "./CardRoute";
import CardUser from "./CardUser";
import "../Sass/Styles/RouteCardContainer.scss";
import "../Sass/Styles/RouteCard.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const RoutesFromSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(allRoutes()), []); // eslint-disable-line
  const { routeFromDb } = useSelector((state) => state);

  return (
    <div className="RouteCardContainer">
      {routeFromDb.length > 0 ? (
        routeFromDb.map((route, i) => (
          <Link to={`/route/${route.id}`} style={{ textDecoration: "none" }}>
            <div className="RouteCard">
              <CardUser
                photo={route.users[0].photo}
                name={route.users[0].name}
                calification={route.users[0].calification}
                key={i}
              />

              <CardRoute
                origin={route.originName}
                destiny={route.destinyName}
                infoRoute={route.infoRoute}
                date={route.date}
                hours={route.hours}
                place={route.place}
                key={i + 1}
              />
            </div>
          </Link>
        ))
      ) : (
        <div className="mensajeRutas">
          <FormattedMessage
            id="routesFromSearch.noRoute"
            defaultMessage="No route match your search"
          />
        </div>
      )}
    </div>
  );
};
export default RoutesFromSearch;
