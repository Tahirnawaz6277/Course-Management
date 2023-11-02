import React, { useState, useEffect } from "react";
import {
  NavLink,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";

import axios from "axios";
import "./Css/AddTask.css";

function EditStudent() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  //4th request update
  const [values, setValues] = useState({
    id: id,
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("https://localhost:7222/api/Tasks/" + id)
      .then((res) => {
        setValues({
          ...values,
          title: res.data.title,
          description: res.data.description,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleUpdate = () => {
    axios
      .patch("https://localhost:7222/api/Tasks/" + id, values)
      .then(() => {
        navigate("/read");
      })
      .catch((error) => {
        console.log("cannot put data,error occured", error);
      });
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleUpdate}>
          <h2>Update Course</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={values.title}
              onChange={(e) => {
                setValues({ ...values, title: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Gender" className="form-label">
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
              value={values.description}
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
          </div>

          <NavLink to="/read">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleUpdate();
              }}
            >
              Save Course
            </button>
          </NavLink>
          <NavLink to="/read">
            <button type="button" className="btn btn-success m-2">
              Back
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default EditStudent;
