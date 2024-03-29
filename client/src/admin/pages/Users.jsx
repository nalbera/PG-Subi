import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  AssignmentInd,
  WcOutlined,
  Event,
  PhotoCamera,
  DirectionsCar,
  Facebook,
  Instagram,
  Home,
  VpnKey,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../Sass/Styles/UserAdmin.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUserAdmin, getUserAdmin, getUserDetail } from "../../actions";

export default function User2() {
  const { id, userAdmin, carAdmin } = useSelector((state) => state);
  const { user } = useAuth0();
  const dispatch = useDispatch();


  // -------------------------------------<useEffect>-------------------------------------
  useEffect(
    (id) => {
      dispatch(getAllUserAdmin());
      dispatch(getUserDetail(id));
    },
    [dispatch, id]
  );

  // ------------------<handles>------------------
  function Click() {
    dispatch(getUserAdmin(id));
  }

  //   __________________________________________________________________________________________
  return (
    <div className="userAdmin">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainerAdmin">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={userAdmin.photo || user.picture}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userAdmin.name}</span>
              <span className="userShowUserTitle">
                {userAdmin?.cars?.length > 0 ? "Driver" : "Passenger"}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.name}</span>
              <span className="userShowInfoTitle">{userAdmin.lastName}</span>
            </div>
            <div className="userShowInfo">
              <AssignmentInd className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.dni}</span>
            </div>
            <div className="userShowInfo">
              <Event className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.age}</span>
            </div>
            <div className="userShowInfo">
              <WcOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.genre}</span>
            </div>
            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">
                {userAdmin.street + "|"}
              </span>
              <span className="userShowInfoTitle">{userAdmin.city + "|"}</span>
              <span className="userShowInfoTitle">{userAdmin.province}</span>
            </div>
            <div className="userShowInfo">
              <VpnKey className="userShowIcon" />
              <span className="userShowInfoTitle">
                {userAdmin.isAdmin === true ? "Admin" : "Not Admin"}
              </span>
            </div>
            <div className="userShowInfo">
              <VpnKey className="userShowIcon" />
              <span className="userShowInfoTitle">
                {userAdmin.isBanned === false ? "no banner" : "banner"}
              </span>
            </div>
            <span className="userShowTitle">Account Documents</span>
            <div className="userShowInfo">
              <PhotoCamera className="userShowIcon" />
              {!userAdmin.photoDni
                ? ""
                : userAdmin.photoDni.map((e, i) => (
                  <img src={e} alt="" className="userShowImage" />
                ))}
            </div>

           {carAdmin?.greencard && <div className="userShowInfo">
              <DirectionsCar className="userShowIcon" />
              <img className="userShowImage" src={carAdmin?.greencard} alt="" />
            </div>
            }

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.telephone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.email}</span>
            </div>
            <div className="userShowInfo">
              <Facebook className="userShowIcon" />
              <span className="userShowInfoTitle">
                {!userAdmin.facebook ? "No Facebook added" : userAdmin.facebook}
              </span>
            </div>
            <div className="userShowInfo">
              <Instagram className="userShowIcon" />
              <span className="userShowInfoTitle">
                {!userAdmin.instagram
                  ? "No Instagram added"
                  : userAdmin.instagram}
              </span>
            </div>

            {/*----------------------------------------------------<info car>----------------------------------------------------------------------------------- */}

            {userAdmin?.cars?.length > 0 && (
              <div className="userShow">
                <div className="userShowBottom">
                  <span className="userShowTitle">Car Details</span>
                  <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">{carAdmin?.brand}</span>
                  </div>
                  <div className="userShowInfo">
                    <AssignmentInd className="userShowIcon" />
                    <span className="userShowInfoTitle">{carAdmin?.color}</span>
                  </div>
                  <div className="userShowInfo">
                    <Event className="userShowIcon" />
                    <span className="userShowInfoTitle">{carAdmin?.model}</span>
                  </div>
                  <div className="userShowInfo">
                    <WcOutlined className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {carAdmin?.cylinder}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <Home className="userShowIcon" />
                    <span className="userShowInfoTitle">
                      {carAdmin?.patent}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link to="/admin/Update">
          <button className="buttonUpdateAdmin" onClick={() => Click()}>
            Update
          </button>
        </Link>
      </div>
    </div>
  );
}
