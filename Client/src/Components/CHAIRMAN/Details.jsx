import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //     try {
  //       setLoading(true);

  //       // Step 1: Fetch actions from getActionRequest
  //       const actionResponse = await axios.post("http://localhost:5000/api/v1/getActionRequest");
  //       const actions = actionResponse.data.data;

  //       // Step 2: Fetch full details from getRequest
  //       const detailedRequests = await Promise.all(
  //         actions.map(async (action) => {
  //           const requestResponse = await axios.get("http://localhost:5000/api/v1/getRequest", {
  //             id: action.RequestData,
  //           });
  //           return { ...requestResponse.data.data, status: action.status }; // Merge details with status
  //         })
  //       );

  //       // Step 3: Separate into Accepted and Rejected
  //       setAcceptedRequests(detailedRequests.filter((req) => req.status.toLowerCase() === "accepted"));
  //       setRejectedRequests(detailedRequests.filter((req) => req.status.toLowerCase() === "rejected"));
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Error fetching data. Please try again later.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchRequests();
  // }, []);
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
  
        // Step 1: Fetch actions from getActionRequest
        const actionResponse = await axios.post("http://localhost:5000/api/v1/getActionRequest");
        console.log("Action Response:", actionResponse.data);
        const actions = actionResponse.data.data;
  
        
        const detailedRequests = [];
        const processedIds = new Set(); 
  
        for (const action of actions) {
          if (!processedIds.has(action.RequestData)) { // Only process if ID not already handled
            processedIds.add(action.RequestData);
  
            const requestResponse = await axios.get("http://localhost:5000/api/v1/getActionRequest", {
              params: { id: action.RequestData }, // Correctly pass `id`
            });
  
            console.log(`Request Response for ${action.RequestData}:`, requestResponse.data);
  
            // Iterate over all entries in the `data` array
            const requestsArray = requestResponse.data.data;
  
            requestsArray.forEach((req) => {
              // Merge each request with its corresponding status
              detailedRequests.push({ ...req, status: action.status });
            });
          }
        }
  
        console.log("Detailed Requests (unique):", detailedRequests);
  
        // Step 3: Separate into Accepted and Rejected
        setAcceptedRequests(detailedRequests.filter((req) => req.status.toLowerCase() === "accepted"));
        setRejectedRequests(detailedRequests.filter((req) => req.status.toLowerCase() === "rejected"));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };
  
    fetchRequests();
  }, []);
  
  
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="container">
      <section className="row">
        <div className="col-12">
          <div className="text-center">
            <h1 className="jacques-francois-shadow-regular" style={{ fontSize: "60px" }}>
              Request Detail
            </h1>
          </div>
        </div>
        <hr />

        {/* Accepted Requests */}
        <div className="col-12 col-md-6 mb-4" style={{ borderRight: "2px solid #ccc", paddingRight: "20px" }}>
          <h1 className="jacques-francois-shadow-regular text-success text-center">Accepted Requests</h1>
          <div className="table-responsive" style={{ marginTop: "20px", maxHeight: "350px", overflowY: "auto" }}>
            <table className="table table-success table-striped table-bordered border-success">
              <thead>
                <tr className="jacques-francois-shadow-regular fs-5">
                  <th>#</th>
                  <th>Society Name</th>
                  <th>Society Lead</th>
                  <th>Venue</th>
                  <th>Venue Date</th>
                  <th>Hall</th>
                </tr>
              </thead>
              <tbody>
                {acceptedRequests.map((req, index) => (
                  <tr key={req._id}>
                    <td>{index + 1}</td>
                    <td>{req.SocietyName}</td>
                    <td>{req.LeadName}</td>
                    <td>{req.EventName}</td>
                    <td>{new Date(req.EventDate).toLocaleDateString()}</td>
                    <td>{req.Location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rejected Requests */}
        <div className="col-12 col-md-6 mb-4">
          <h1 className="jacques-francois-shadow-regular text-danger text-center">Rejected Requests</h1>
          <div className="table-responsive" style={{ marginTop: "20px", maxHeight: "350px", overflowY: "auto" }}>
            <table className="table table-danger table-striped table-bordered border-danger">
              <thead>
                <tr className="jacques-francois-shadow-regular fs-5">
                  <th>#</th>
                  <th>Society Name</th>
                  <th>Society Lead</th>
                  <th>Venue</th>
                  <th>Venue Date</th>
                  <th>Hall</th>
                </tr>
              </thead>
              <tbody>
                {rejectedRequests.map((req, index) => (
                  <tr key={req._id}>
                    <td>{index + 1}</td>
                    <td>{req.SocietyName}</td>
                    <td>{req.LeadName}</td>
                    <td>{req.EventName}</td>
                    <td>{new Date(req.EventDate).toLocaleDateString()}</td>
                    <td>{req.Location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
