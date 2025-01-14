// import React from "react";
// import {
//   Card,
//   CardContent,
//   Grid,
//   InputAdornment,
//   TextField,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import DeleteIcon from "@mui/icons-material/Delete";
// const ChairmanRequest = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "10px",
//           boxSizing: "border-box",
//         }}
//       >
//         <Card
//           style={{
//             width: "100%",
//             maxWidth: "1000px", // Sets a max-width for larger screens
//             margin: "0 auto",
//             padding: "10px",
//             border: "1px solid black",
//             backgroundColor: "white",
//             borderRadius: "10px",
//             backgroundColor: "black",
//             color: "white",
//           }}
//         >
//           <CardContent>
//             <h1
//               className="d-flex justify-content-start fw-bold jacques-francois-shadow-regular"
//               style={{ fontSize: "42px" }}
//             >
//               Requests
//             </h1>
//             <hr
//               style={{
//                 height: "3px",
//                 color: "white",
//                 backgroundColor: "white",
//               }}
//             />

//             {/* buttons */}
//             <div className="d-flex justify-content-between jacques-francois-shadow-regular">
//               <h1
//                 className="fw-bold pt-2 jacques-francois-shadow-regular"
//                 style={{ fontSize: "30px" }}
//               >
//                 Total Requests : 1
//               </h1>

//               <Grid item xs={5}>
//                 <TextField
//                   label="Search"
//                   placeholder="Seminar or Auditorium"
//                   variant="outlined"
//                   fullWidth
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <SearchIcon style={{ color: "white" }} />
//                       </InputAdornment>
//                     ),
//                   }}
//                   InputLabelProps={{
//                     style: { color: "white" }, // Change label color to white
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": {
//                         borderColor: "white", // Change border color to white
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "white",
//                       },
//                       "&.Mui-focused fieldset": {
//                         borderColor: "white",
//                       },
//                     },
//                     input: { color: "white" }, // Change input text color to black
//                   }}
//                 />
//               </Grid>
//             </div>
//             <hr
//               style={{
//                 height: "3px",
//                 borderWidth: "0",
//                 color: "white",
//                 backgroundColor: "white",
//               }}
//             />

//             {/* Table */}
//             <div
//               style={{
//                 marginTop: "10px",
//                 maxHeight: "220px",
//                 overflowY: "auto",
//               }}
//             >
//               <table className="table table-striped">
//                 <thead>
//                   <tr className="jacques-francois-shadow-regular fs-5">
//                     <th scope="col">#</th>
//                     <th scope="col">SocietyName</th>
//                     <th scope="col">SocietyLead</th>
//                     <th scope="col">Venue</th>
//                     <th scope="col">VenueDate</th>
//                     <th scope="col">Hall</th>
//                     <th scope="col" className="text-center">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>GDSC</td>
//                     <td>Huraira Shahid</td>
//                     <td>WorkShop</td>
//                     <td>2-3-2024</td>
//                     <td>Seminar</td>
//                     <td className="pt-2">
//                       <button
//                         // onClick={() => acceptedOrder(e._id)}
//                         className="btn btn-success"
//                       >
//                         Accepted
//                       </button>
//                       <button
//                         // onClick={() => rejectedOrder(e._id)}
//                         className="btn btn-danger ms-1"
//                       >
//                         Rejected
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default ChairmanRequest;
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ChairmanRequest = () => {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Society Requests
  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/getRequest"
      );
      // Assuming `response.data` contains the whole response with statusCode, data, etc.
      setRequests(response.data.data); // Extract and set the `data` key
      console.log("Requests fetched successfully:", response.data.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  // Handle Accept/Reject Action
  const handleAction = async (id, status) => {
    try {
      await axios.post(`http://localhost:5000/api/v1/actionRequest/${id}`, {
        status,
      });
      alert(`Request ${status} successfully!`);
      fetchRequests(); // Refresh data after action
    } catch (error) {
      console.error("Error handling action:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Filter requests based on search query
  const filteredRequests = requests.filter(
    (request) =>
      request.LeadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.SocietyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.EventDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.EventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.Location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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

          {/* buttons */}
          <div className="d-flex justify-content-between jacques-francois-shadow-regular">
            <h1
              className="fw-bold pt-2 jacques-francois-shadow-regular"
              style={{ fontSize: "30px" }}
            >
              Total Requests: {filteredRequests.length}
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
                {requests.length > 0 ? (
                  requests.map((request, index) => (
                    <tr key={request._id}>
                      <td>{index + 1}</td>
                      <td>{request.SocietyName}</td>
                      <td>{request.LeadName}</td>
                      <td>{request.EventName}</td>
                      <td>
                        {new Date(request.EventDate).toLocaleDateString()}
                      </td>
                      <td>{request.Location}</td>
                      <td className="pt-2">
                        <button
                          onClick={() => handleAction(request._id, "Accepted")}
                          className="btn btn-success"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleAction(request._id, "Rejected")}
                          className="btn btn-danger ms-1"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChairmanRequest;
