import React from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default Home;
