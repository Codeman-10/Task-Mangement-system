import React from "react";
import { Image } from "semantic-ui-react";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <span>
          <i className="user icon large"></i>
        </span>
        <h3>Task Management System</h3>
      </div>
      <div className="search">
        <div class="ui search">
          <div class="ui icon input">
            <input
              class="prompt"
              type="text"
              placeholder="Search ..."
            />
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
      <div className="right-header">
        <div className="notification">
          <i className="bell icon"></i>
        </div>
        <div className="profile">
          <Image
            src="https://gravatar.com/avatar/a405bd3a6e873b6efc2600909c87d95b?s=400&d=robohash&r=x"
            alt="User"
            className="avatar-img"
            circular
            size="small"
          />
          <span style={{ marginLeft: "10px" }}>John Doe</span>
       </div>
      </div>
    </div>
  );
}

export default Header;
