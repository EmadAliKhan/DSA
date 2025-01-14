import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Requests = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch accepted requests
  const fetchAcceptedRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/v1/getActionRequest");
      const { data } = response.data;

      // Filter for only "accepted" status
      const accepted = data.filter((req) => req.status === "accepted");
      setAcceptedRequests(accepted);
      setError("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle accept or reject action
  const handleAction = async (id, actionType) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/DSAAction/${id}`, {
        status: actionType,
      });

      if (response.data.success) {
        // Update UI to reflect changes
        setAcceptedRequests((prev) =>
          prev.filter((req) => req._id !== id) // Remove the handled request from the list
        );
        alert(`Request ${actionType === "accepted" ? "Accepted" : "Rejected"} Successfully!`);
      } else {
        alert("Action failed. Please try again.");
      }
    } catch (err) {
      console.error(`Failed to ${actionType} request`, err);
      alert(`Failed to ${actionType} request. Please try again.`);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAcceptedRequests();
  }, []);

  // Filter requests based on the search query
  const filteredRequests = acceptedRequests.filter((req) =>
    req.Location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "10px",
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
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

            {/* Search and Total Count */}
            <div className="d-flex justify-content-between jacques-francois-shadow-regular">
              <h1
                className="fw-bold pt-2 jacques-francois-shadow-regular"
                style={{ fontSize: "30px" }}
              >
                Total Accepted Requests: {acceptedRequests.length}
              </h1>
              <Grid item xs={5}>
                <TextField
                  label="Search"
                  placeholder="Seminar or Auditorium"
                  variant="outlined"
                  fullWidth
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    input: { color: "white" },
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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-danger">{error}</p>
              ) : filteredRequests.length > 0 ? (
                <table className="table table-striped">
                  <thead>
                    <tr className="jacques-francois-shadow-regular fs-5">
                      <th scope="col">#</th>
                      <th scope="col">Society Name</th>
                      <th scope="col">Society Lead</th>
                      <th scope="col">Venue</th>
                      <th scope="col">Venue Date</th>
                      <th scope="col">Hall</th>
                      <th scope="col" className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRequests.map((req, index) => (
                      <tr key={req._id}>
                        <td>{index + 1}</td>
                        <td>{req.SocietyName}</td>
                        <td>{req.LeadName}</td>
                        <td>{req.EventName}</td>
                        <td>{new Date(req.EventDate).toLocaleDateString()}</td>
                        <td>{req.Location}</td>
                        <td className="pt-2 text-center">
                          <button
                            className="btn btn-success"
                            onClick={() => handleAction(req._id, "accepted")}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-danger ms-1"
                            onClick={() => handleAction(req._id, "rejected")}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No requests.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Requests;
