import { useContext } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);



  const logoutHandler = () => {
    dispatch({type: 'LOGOUT'});

  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink activeclassname="active" className="link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeclassname="active" className="link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeclassname="active" className="link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeclassname="active" className="link" to="/write">
              WRITE
            </NavLink>
          </li>
          <li className="topListItem" onClick={logoutHandler}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="/profile-pic/13.png"
            alt="profile_picture"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink activeclassname="active" className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink activeclassname="active" className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
};

export default TopBar;
