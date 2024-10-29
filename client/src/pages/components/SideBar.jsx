import React from "react";
import { Button } from "semantic-ui-react";
import { MdDashboard } from "react-icons/md";

function SideBar() {
  const getNavigationLinks = () => {
    return <></>;
  };

  return (
    <div className="sidebar">
      <div className="header">
        <h3>
          <span>
            <i className="user icon large"></i>
          </span>
          TMS
        </h3>
      </div>
      <div className="items">
        <Button className="btn">
          <div>
            <MdDashboard /> Dashboard
          </div>
        </Button>
        <Button className="btn">
          <div>
            <MdDashboard /> Dashboard
          </div>
        </Button>{" "}
        <Button className="btn">
          <div>
            <MdDashboard /> Dashboard
          </div>
        </Button>{" "}
        <Button className="btn">
          <div>
            <MdDashboard /> Dashboard
          </div>
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
