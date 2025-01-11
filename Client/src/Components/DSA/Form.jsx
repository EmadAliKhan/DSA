import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useLocation, useNavigate } from "react-router-dom";
import { Autocomplete, Card, CardContent } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";

export default function Form() {
  const location = useLocation();
  const { type } = location.state || {};
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [department, setDepartment] = React.useState("");
  //   https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?cs=srgb&dl=pexels-francesco-ungaro-396547.jpg&fm=jpg
  const notifyFieldsError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyInvalidError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    
    //   // Notify if fields are missing
    //   if (!email || !password || !department) {
    //     notifyFieldsError("🦄 Please fill all the fields!");
    //     return;
    //   }
    
    //   try {
    //     // Mocking API request for now (Replace with actual API call)
    //     const response = await fetch("http://localhost:5000/api/v1/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //         department,
    //       }),
    //     });
    
    //     const data = await response.json();
    
    //     if (response.ok) {
    //       // Mock Validation for Login Type
    //       if (type === "Society") {
    //         navigate("/Societydashboard");
    //       } else if (type === "DSA") {
    //         navigate("/DSAdashboard");
    //       } else if (type === "Chairman") {
    //         navigate("/Chairmandashboard");
    //       } else {
    //         notifyInvalidError("🦄 Invalid login type!");
    //       }
    //     } else {
    //       notifyInvalidError(data.message || "Invalid credentials!");
    //     }
    //   } catch (error) {
    //     notifyInvalidError("🦄 Login failed. Try again later!");
    //     console.error(error);
    //   }
    // };
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      if (!email || !password || !department) {
        notifyFieldsError("🦄 Please fill all the fields!");
        return;
      }
    
      try {
        const response = await fetch("http://localhost:5000/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            department, // Ensure capitalization matches the backend key
          }),
        });
    
        if (!response.ok) {
          const errorResponse = await response.json();
          console.error("Error Response:", errorResponse); // Log error for debugging
          notifyInvalidError(errorResponse.message || "Login failed!");
          return;
        }
    
        const data = await response.json();
        console.log("Login Successful, Response Data:", data); // Debugging
    
        if (data.success && data.data) {
          // Redirect based on type passed through `location.state`
          switch (type) {
            case "Society":
              navigate("/Societydashboard");
              break;
            case "DSA":
              navigate("/DSAdashboard");
              break;
            case "Chairman":
              navigate("/Chairmandashboard");
              break;
            default:
              notifyInvalidError("🦄 Invalid login type!");
          }
        } else {
          notifyInvalidError("🦄 Invalid credentials or unexpected response.");
        }
      } catch (error) {
        console.error("API Request Error:", error);
        notifyInvalidError("🦄 Login failed. Try again later!");
      }
    };
    
    

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?cs=srgb&dl=pexels-francesco-ungaro-396547.jpg&fm=jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "20px",
          border: "2px solid white",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)", // Apply blur to the background
          borderRadius: "10px",
        }}
        className="jacques-francois-shadow-regular"
      >
        <CardContent>
          <h1
            className="d-flex justify-content-center text-white mb-4 fw-bold"
            style={{ fontSize: "42px" }}
          >
            {type} Login
          </h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "white" }, // Change label color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change border color to white
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    input: { color: "white" }, // Change input text color to white
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                  type="password" // Ensure the password is masked
                  InputLabelProps={{
                    style: { color: "white" }, // Change label color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Change border color to white
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    input: { color: "white" }, // Change input text color to white
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={["CSE", "EE", "BSCS"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Department"
                      variant="outlined"
                      required
                      InputLabelProps={{
                        style: { color: "white" }, // Valid RGB values
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // Change border color to white
                          },
                          "&:hover fieldset": {
                            borderColor: "white",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white",
                          },
                        },
                        input: { color: "white" }, // Change input text color to white
                      }}
                    />
                  )}
                  onChange={(event, value) => setDepartment(value)}
                />
              </Grid>
              {/* button */}
              <Grid
                xs={12}
                marginTop={2}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  className="btn btn-outline-light px-5 fs-5 fw-bold border-2"
                  type="submit"
                >
                  Log In <LoginIcon />
                </button>
              </Grid>
            </Grid>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
