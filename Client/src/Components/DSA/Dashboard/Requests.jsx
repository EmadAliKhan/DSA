import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
const Requests = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "1000px", // Sets a max-width for larger screens
            margin: "0 auto",
            padding: "10px",
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <CardContent>
            <h1
              className="d-flex justify-content-start fw-bold jacques-francois-shadow-regular"
              style={{ fontSize: "42px" }}
            >
              Requests
            </h1>
            <hr
              style={{
                height: "3px",
                color: "white",
                backgroundColor: "white",
              }}
            />

            {/* buttons */}
            <div className="d-flex justify-content-between jacques-francois-shadow-regular">
              <h1
                className="fw-bold pt-2 jacques-francois-shadow-regular"
                style={{ fontSize: "30px" }}
              >
                Total Requests : 1
              </h1>

              <Grid item xs={5}>
                <TextField
                  label="Search"
                  placeholder="Seminar or Auditorium"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
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
                    input: { color: "white" }, // Change input text color to black
                  }}
                />
              </Grid>
            </div>
            <hr
              style={{
                height: "3px",
                borderWidth: "0",
                color: "white",
                backgroundColor: "white",
              }}
            />

            {/* Table */}
            <div
              style={{
                marginTop: "10px",
                maxHeight: "220px",
                overflowY: "auto",
              }}
            >
              <table className="table table-striped">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">SocietyName</th>
                    <th scope="col">SocietyLead</th>
                    <th scope="col">Venue</th>
                    <th scope="col">VenueDate</th>
                    <th scope="col">Hall</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>GDSC</td>
                    <td>Huraira Shahid</td>
                    <td>WorkShop</td>
                    <td>2-3-2024</td>
                    <td>Seminar</td>
                    <td className="pt-2">
                      <button
                        // onClick={() => acceptedOrder(e._id)}
                        className="btn btn-success"
                      >
                        Accepted
                      </button>
                      <button
                        // onClick={() => rejectedOrder(e._id)}
                        className="btn btn-danger ms-1"
                      >
                        Rejected
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Requests;
