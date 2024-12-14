import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DSADashboard from "../Components/DSA/Dashboard/DSAdashboard";
import Welcome from "../Components/Welcome";
import Form from "../Components/DSA/Form";
import SocietyDashboard from "../Components/DSA/SOCIETY/Dashboard/SocietyDashboard";
import ChairmanDashboard from "../Components/CHAIRMAN/ChairmanDashboard";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/DSAdashboard/*" element={<DSADashboard />} />
          <Route path="/Societydashboard/*" element={<SocietyDashboard />} />
          <Route path="/Chairmandashboard/*" element={<ChairmanDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
