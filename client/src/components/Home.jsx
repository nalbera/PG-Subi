import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Sass/Styles/Home.scss";
import navigator from "../img/navigator.svg";
import cityDriver from "../img/cityDriver.svg";
import carDriver from "../img/carDriver.svg";
import SearchBarHome from "./SearchBarHome";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getUserProfile, getAllUsers, deleteRouteFromDb } from "../actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  const userpro = useSelector((state) => state.userpro);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserProfile(userpro.email));
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    dispatch(getAllUsers());
  }, []); // eslint-disable-line

  function handleClick() {
    if (!isAuthenticated) {
      return new Swal({
        icon: "warning",
        title: "Sorry",
        text: "You need to be logged in to post a trip!",
        confirmButtonText: "Alright",
      });
    }
  }
  return (
    <div className="Homepage">
      <section className="searchBarSection">
        <h1>
          <FormattedMessage
            id="searchBarHome.searchTitle"
            defaultMessage="Where do you want to go?"
          />
        </h1>
        <SearchBarHome />
      </section>

      <section className="upperSection">
        <img className="homepageImage" src={navigator} alt="Home" />
        <article>
          <h1>
            <FormattedMessage
              id="home.title1"
              defaultMessage="Save money while driving"
            />
          </h1>

          <p className="description">
            <FormattedMessage
              id="home.p1"
              defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
                dollars * of your passengers. You will only need a couple of minutes
                to publish your route. Do we share a trip?"
            />
          </p>
          <p className="detail">
            <FormattedMessage
              id="home.p2"
              defaultMessage="* Average amount received by drivers in 2021."
            />
          </p>

          {isAuthenticated ? (
            <button
              className="button"
              onClick={() => {
                dispatch(deleteRouteFromDb("lala"));
                history.push("/route-list");
              }}
            >
              <FormattedMessage
                id="home.routes"
                defaultMessage="See all routes available!"
              />
            </button>
          ) : (
            <button onClick={handleClick} className="button">
              <FormattedMessage
                id="home.routes"
                defaultMessage="See all routes available!"
              />
            </button>
          )}
        </article>
      </section>

      <section className="lowerSection">
        <div>
          <img className="SVGs" src={cityDriver} alt="Are you a passenger?" />
          <h3><FormattedMessage id="home.imagensub1" defaultMessage="Are you a passenger?" /></h3>
          <p>
            <FormattedMessage id="home.imagenAbajo1" defaultMessage="" />
          </p>
        </div>
        <div>
          <img className="SVGs" src={carDriver} alt="Are you a driver?" />
          <h3><FormattedMessage id="home.imagensub2" defaultMessage="Are you a driver?" /></h3>
          <p>
            <FormattedMessage id="home.imagenAbajo2" defaultMessage="" />
          </p>
        </div>
      </section>
    </div>
  );
}
