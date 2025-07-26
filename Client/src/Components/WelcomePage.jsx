import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ data }) => {
  console.log(data);

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/SocietyDashboard/requestForm");
  }, 5000);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "rgb(295, 150, 0)",
        color: "black",
        padding: 3,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="h5" component="p">
        Manage your Data efficiently and effectively.
      </Typography>
      <Typography variant="h5" component="p">
        You will redirecting to the dashboard in a few seconds...
      </Typography>
    </Box>
  );
};

export default WelcomePage;
