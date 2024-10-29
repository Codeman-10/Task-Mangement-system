import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RiTodoLine } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TbProgress } from "react-icons/tb";
import AddTaskPopup from "./AddTaskPopup";

function Dashboard({ taskList }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="heading">
          <div className="left">
            <h2>Tasks</h2>
          </div>
          <div className="right">
            <Button onClick={() => setShow(true)}>New Task </Button>
          </div>
        </div>
        <div className="task-panel">
          <div className="task-wrapper todo">
            <div className="heading todo">
              <RiTodoLine />
              To do
            </div>
            <div className="card_wrapper">
              {taskList
                .filter((item) => item.status === "")
                .map((item) => (
                  <div className="card">
                    <div className="heading">
                      <GoDotFill className="todo" />
                      <p>{item.title}</p>
                      <div className="options">
                        <GrEdit />
                        <MdDeleteOutline />
                      </div>
                    </div>
                    <div className="content">{item.description}</div>
                  </div>
                ))}
            </div>
          </div>

          <div className="task-wrapper  progress">
            <div className="heading progress">
              <TbProgress />
              In progress
            </div>
            <div className="card_wrapper">
              {taskList
                .filter((item) => item.status === "progress")
                .map((item) => (
                  <div className="card">
                    <div className="heading">
                      <GoDotFill className="progress" />
                      <p>{item.title}</p>
                      <div className="options">
                        <GrEdit />
                        <MdDeleteOutline />
                      </div>
                    </div>
                    <div className="content">{item.description}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="task-wrapper done">
            <div className="heading done">
              <IoCheckmarkDoneCircleOutline />
              Done
            </div>
            <div className="card_wrapper">
              {taskList
                .filter((item) => item.status === "done")
                .map((item) => (
                  <div className="card">
                    <div className="heading">
                      <GoDotFill className="done" />
                      <p>{item.title}</p>
                      <div className="options">
                        <GrEdit />
                        <MdDeleteOutline />
                      </div>
                    </div>
                    <div className="content">{item.description}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <AddTaskPopup onClose={() => setShow(false)} isOpen={show} />
      </div>
    </>
  );
}

export default Dashboard;
