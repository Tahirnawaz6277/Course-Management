import React, { useState } from "react";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";

import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handlSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Title is required");
      return;
    }
    if (description.trim() === "") {
      alert("Description is required");
      return;
    }
    try {
      const response = axios.post("https://localhost:7222/api/Tasks", {
        title: title,
        description: description,
        header,
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/read");
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <div className="d-flex justify-content-between m-3">
            <h2>Create Course</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label for="Gender" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="Description"
              value={description}
              name="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="">
            <button
              type="button"
              className="addbtn1 btn-success"
              onClick={handlSubmit}
            >
              Add Course
            </button>
            <NavLink to={"/read"}>
              <button className="addbtn2 btn-primary">Show Course</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTask;
