import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useLocation, useNavigate } from "react-router-dom";
import { Autocomplete, Card, CardContent } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginIcon from "@mui/icons-material/Login";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !department) {
      notifyFieldsError("🦄 Please fill all The fields!");
    } else {
      console.log(email, password, department);

      // const Data = {
      //   email: email,
      //   password: password,
      // };
      // if (email === "DSA@gmail.com" && password === "12345678") {
      //   navigate("/DSAdashboard");
      // } else if (email === "Society@gmail.com" && password === "12345678") {
      //   navigate("/Societydashboard");
      // }
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
