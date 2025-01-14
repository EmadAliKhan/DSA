import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestDetail = () => {
  const [requests, setRequests] = useState({
    accepted: [],
    rejected: [],
  });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/getDSAAction");
        const data = response.data.data;

        // Filter data based on status (accepted or rejected)
        const acceptedRequests = data.filter(request => request.status === "accepted");
        const rejectedRequests = data.filter(request => request.status === "rejected");

        // Set the data in state
        setRequests({
          accepted: acceptedRequests,
          rejected: rejectedRequests,
        });
      } catch (error) {
        console.error("Error fetching the requests", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col-12">
            <div className="text-center">
              <h1
                className="jacques-francois-shadow-regular"
                style={{
                  fontSize: "60px",
                }}
              >
                Request Detail
              </h1>
            </div>
          </div>
          <hr />

          {/* Accepted Requests */}
          <div
            className="col-12 col-md-6 mb-4"
            style={{
              borderRight: "2px solid #ccc",
              paddingRight: "20px",
            }}
          >
            <h1 className="jacques-francois-shadow-regular text-success text-center">
              Accepted Requests
            </h1>

            <div
              style={{
                marginTop: "20px",
                maxHeight: "350px",
                overflowY: "auto",
              }}
              className="table-responsive"
            >
              <table className="table table-success table-striped table-bordered border-success">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">SocietyName</th>
                    <th scope="col">SocietyLead</th>
                    <th scope="col">Venue</th>
                    <th scope="col">VenueDate</th>
                    <th scope="col">Hall</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.accepted.map((request, index) => (
                    <tr key={request._id}>
                      <td>{index + 1}</td>
                      <td>{request.SocietyName}</td>
                      <td>{request.LeadName}</td>
                      <td>{request.Location}</td>
                      <td>{new Date(request.EventDate).toLocaleDateString()}</td>
                      <td>{request.Department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rejected Requests */}
          <div className="col-12 col-md-6 mb-4">
            <h1 className="jacques-francois-shadow-regular text-danger text-center">
              Rejected Requests
            </h1>

            <div
              style={{
                marginTop: "20px",
                maxHeight: "350px",
                overflowY: "auto",
              }}
              className="table-responsive"
            >
              <table className="table table-danger table-striped table-bordered border-danger">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">SocietyName</th>
                    <th scope="col">SocietyLead</th>
                    <th scope="col">Venue</th>
                    <th scope="col">VenueDate</th>
                    <th scope="col">Hall</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.rejected.map((request, index) => (
                    <tr key={request._id}>
                      <td>{index + 1}</td>
                      <td>{request.SocietyName}</td>
                      <td>{request.LeadName}</td>
                      <td>{request.Location}</td>
                      <td>{new Date(request.EventDate).toLocaleDateString()}</td>
                      <td>{request.Department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RequestDetail;
