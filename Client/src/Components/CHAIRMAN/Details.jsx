import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchRequests = async () => {
    try {
      setLoading(true); 
      const response = await axios.get("http://localhost:5000/api/v1/getActionRequest");
      const { data } = response.data;

      // Separate requests into accepted and rejected
      setAcceptedRequests(data.filter((req) => req.status === "accepted"));
      setRejectedRequests(data.filter((req) => req.status === "rejected"));
      setError("");
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Failed to fetch request details. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

 
  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="container">
      <section className="row">
        <div className="col-12">
          <div className="text-center">
            <h1 className="jacques-francois-shadow-regular" style={{ fontSize: "60px" }}>
              Request Details
            </h1>
          </div>
        </div>
        <hr />

       
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading ? (
          <div className="text-center">
            <p>Loading request details...</p>
          </div>
        ) : (
          <>
            {/* Accepted Requests */}
            <div
              className="col-12 col-md-6 mb-4"
              style={{ borderRight: "2px solid #ccc", paddingRight: "20px" }}
            >
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
                    {acceptedRequests.length > 0 ? (
                      acceptedRequests.map((req, index) => (
                        <tr key={req._id}>
                          <td>{index + 1}</td>
                          <td>{req.SocietyName}</td>
                          <td>{req.LeadName}</td>
                          <td>{req.EventName}</td>
                          <td>{new Date(req.EventDate).toLocaleDateString()}</td>
                          <td>{req.Location}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No accepted requests found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rejected Requests */}
            <div className="col-12 col-md-6 mb-4">
              <h1 className="jacques-francois-shadow-regular text-danger text-center">Rejected Requests</h1>
              <div
                className="table-responsive"
                style={{ marginTop: "20px", maxHeight: "350px", overflowY: "auto" }}
              >
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
                    {rejectedRequests.length > 0 ? (
                      rejectedRequests.map((req, index) => (
                        <tr key={req._id}>
                          <td>{index + 1}</td>
                          <td>{req.SocietyName}</td>
                          <td>{req.LeadName}</td>
                          <td>{req.EventName}</td>
                          <td>{new Date(req.EventDate).toLocaleDateString()}</td>
                          <td>{req.Location}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No rejected requests found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Details;
