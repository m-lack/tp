import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./components/landing/landing.component";
import Login from "./components/login/login.component.jsx";
import Dashboard from "./components/dashboard/dashboard.component";

const App = () => {
  return(
    <Routes>
      <Route path="/">
        <Route index element={<Landing/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  ) 
}

export default App;
