import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "semantic-ui-react";
import Login from "../login";

function Header() {
  const { isAuthorized, error, status, userObj } = useSelector(
    (state) => state.login
  );
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="search">
        <div class="ui search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search ..." />
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
      <div className="right-header">
        <div className="notification">
          <i className="bell icon"></i>
        </div>
        <div className="profile" onClick={() => setShow(!show)}>
          <Image
            src="https://gravatar.com/avatar/a405bd3a6e873b6efc2600909c87d95b?s=400&d=robohash&r=x"
            alt="User"
            className="avatar-img"
            circular
            size="small"
          />
          <span style={{ marginLeft: "10px" }}>
            {isAuthorized ? userObj.name : "John Doe"}
          </span>
        </div>
      </div>
     {show && <Login Open={show} handleClose={() => setShow(false)} />}
    </div>
  );
}

export default Header;
