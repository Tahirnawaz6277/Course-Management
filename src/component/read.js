import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7222/api/Tasks");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7222/api/Tasks/${id}`);
      getData();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between m-6 custom-div">
          <h2>Read Courses</h2>
          <div class="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={() => {
                if (tabledark === "table-dark") {
                  setTableDark(" ");
                } else setTableDark("table-dark");
              }}
            />
            <label className="form-check-label">Change Theme </label>
          </div>
          <NavLink to={"/"}>
            <button className="btn btn-success">Create Course</button>
          </NavLink>
        </div>
        <table className={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"> Handle Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachdata) => (
              <tr key={eachdata.id}>
                <th scope="row">{eachdata.id}</th>
                <td>{eachdata.title}</td>
                <td>{eachdata.description}</td>
                <td>
                  <NavLink to={`/EditTask/${eachdata.id}`}>
                    <button className="btn btn-success m-2">Edit </button>
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(eachdata.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
