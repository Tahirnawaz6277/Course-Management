import React from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import AddTask from "./component/AddTask";
import EditTask from "./component/EditTask";
import Read from "./component/read";
import EditStudent from "./component/EditTask";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AddTask />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/EditTask/:id" element={<EditStudent />}></Route>
      </Routes>
    </>
  );
}

export default App;
