// import React from "react";
// import {
//   BrowserRouter,
//   Navigate,
//   Outlet,
//   Route,
//   Routes,
// } from "react-router-dom";
// import DSADashboard from "../Components/DSA/Dashboard/DSAdashboard";
// import Welcome from "../Components/Welcome";
// import Form from "../Components/DSA/Form";
// import SocietyDashboard from "../Components/DSA/SOCIETY/Dashboard/SocietyDashboard";
// import ChairmanDashboard from "../Components/CHAIRMAN/ChairmanDashboard";
// import WelcomePage from "../Components/WelcomePage";

// const AppRoute = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Welcome />} />
//           <Route path="/form" element={<Form />} />
//           {/* // DSA route */}
//           <Route element={<DSAAuthProtection />}>
//             <Route path="/DSAdashboard/*" element={<DSADashboard />} />
//           </Route>
//           {/* Society Route */}
//           {/* <Route
//             path="/Societydashboard/welcomePage"
//             element={<WelcomePage />}
//           /> */}
//           <Route element={<SocietyAuthProtection />}>
//             <Route path="/Societydashboard/*" element={<SocietyDashboard />} />
//           </Route>
//           {/* Chaorman Routes */}
//           <Route element={<ChairmanAuthProtection />}>
//             <Route
//               path="/Chairmandashboard/*"
//               element={<ChairmanDashboard />}
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// // Auth Protection
// const SocietyAuthProtection = () => {
//   return (
//     <>
//       {localStorage.getItem("Society") ? <Outlet /> : <Navigate to={"/form"} />}
//     </>
//   );
// };
// const DSAAuthProtection = () => {
//   return (
//     <>{localStorage.getItem("DSA") ? <Outlet /> : <Navigate to={"/form"} />}</>
//   );
// };
// const ChairmanAuthProtection = () => {
//   return (
//     <>
//       {localStorage.getItem("Chairman") ? (
//         <Outlet />
//       ) : (
//         <Navigate to={"/form"} />
//       )}
//     </>
//   );
// };
// export default AppRoute;
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import DSADashboard from "../Components/DSA/Dashboard/DSAdashboard";
import Welcome from "../Components/Welcome";
import Form from "../Components/DSA/Form";
import SocietyDashboard from "../Components/DSA/SOCIETY/Dashboard/SocietyDashboard";
import ChairmanDashboard from "../Components/CHAIRMAN/ChairmanDashboard";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/form" element={<Form />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute role="DSA" />}>
          <Route path="/DSAdashboard/*" element={<DSADashboard />} />
        </Route>

        <Route element={<ProtectedRoute role="Society" />}>
          <Route path="/Societydashboard/*" element={<SocietyDashboard />} />
        </Route>

        <Route element={<ProtectedRoute role="Chairman" />}>
          <Route path="/Chairmandashboard/*" element={<ChairmanDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Single Auth Protection Component
const ProtectedRoute = ({ role }) => {
  return localStorage.getItem(role) ? <Outlet /> : <Navigate to="/form" />;
};

export default AppRoute;
