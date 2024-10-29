import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./login";
import { useDispatch, useSelector } from "react-redux";
import { getTasksList } from "../services/api";

function Home() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksList());
  }, []);

  const { loading, taskList } = useSelector((state) => state.dashboard);
  return (
    <>
      {!loading && (
        <div className="home">
          <Header />
          <Dashboard taskList={taskList} />
          {show && <Login Open={show} handleClose={() => setShow(false)} />}
        </div>
      )}
    </>
  );
}

export default Home;
