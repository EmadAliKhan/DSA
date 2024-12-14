import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Autocomplete, Card, CardContent } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PublishIcon from "@mui/icons-material/Publish";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useForm } from "react-hook-form";
// import axios from "axios";
// import { BASE_URL } from "../Api";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifySuccess = (Success) =>
    toast.success(Success, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  //Getting data using react-hook-form
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = async (data) => {
    // console.log("data", data);
    if (!data) {
      notifyError("🦄 Fill all the fields!");
    } else if (data.password !== data.ConfirmPassword) {
      notifyError("🦄 Password and Confirm Password must be same!");
    } else {
      console.log(data, "final data");
      notifySuccess("🦄 Your Account created Successfully");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card
          style={{
            width: "100%",
            maxWidth: "650px",
            margin: "0 auto",
            padding: "10px 20px 0px 20px",
            border: "1px solid white",
            backgroundColor: "black",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            boxSizing: "border-box",
          }}
        >
          <CardContent>
            <h1
              className="d-flex justify-content-center  mb-3 jacques-francois-shadow-regular"
              style={{
                fontSize: "50px",
                color: "white",
              }}
            >
              Request Form
            </h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Grid container spacing={1.5}>
                {/* Society Name */}
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Society Name"
                    {...register("SocietyName")}
                    placeholder="Society"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: " white",
                        },
                        "&:hover fieldset": {
                          borderColor: " white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: " white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={["GDSC", "IEE", "IISE"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Society Name"
                        variant="outlined"
                        required
                        InputLabelProps={{
                          style: { color: "white" }, // Valid RGB values
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                            "& fieldset": {
                              borderColor: " white",
                            },
                            "&:hover fieldset": {
                              borderColor: " white",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: " white",
                            },
                          },
                          input: { color: "white" },
                        }}
                      />
                    )}
                    onChange={(event, value) => {
                      // Handle change and register the selected value
                      register("SocietyName").onChange({ target: { value } });
                    }}
                  />
                </Grid>

                {/* Lead Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Lead Name"
                    {...register("leadName")}
                    placeholder="Lead"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: " white",
                        },
                        "&:hover fieldset": {
                          borderColor: " white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: " white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>

                {/* Event Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Event Name"
                    {...register("Event")}
                    placeholder="Event"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: " white",
                        },
                        "&:hover fieldset": {
                          borderColor: " white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: " white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>

                {/* Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    {...register("Date")}
                    placeholder="Date"
                    variant="outlined"
                    fullWidth
                    type="date"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: " white",
                        },
                        "&:hover fieldset": {
                          borderColor: " white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: " white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* Hall */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Hall"
                    {...register("ConfirmPassword")}
                    placeholder="confirmPassword"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: " white",
                        },
                        "&:hover fieldset": {
                          borderColor: " white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: " white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button className="btn btn-light px-5" type="submit">
                    <span className="jacques-francois-shadow-regular fs-5 fw-bold">
                      Submit
                    </span>{" "}
                    <DoneOutlineIcon className="fs-2 pb-1" />
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
    </>
  );
};

export default RequestForm;
