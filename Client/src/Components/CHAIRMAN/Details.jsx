import React from "react";

const Details = () => {
  return (
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

        {/* Accepted Order */}
        <div
          className="col-12 col-md-6 mb-4"
          style={{
            borderRight: "2px solid #ccc", // Vertical line between sections
            paddingRight: "20px", // Adds space between border and content
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
            className="table-responsive" // Responsive table wrapper
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
                <tr>
                  <td>1</td>
                  <td>GDSC</td>
                  <td>Huraira Shahid</td>
                  <td>WorkShop</td>
                  <td>2-3-2024</td>
                  <td>Seminar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rejected Order */}
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
            className="table-responsive" // Responsive table wrapper
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
                <tr>
                  <td>1</td>
                  <td>GDSC</td>
                  <td>Huraira Shahid</td>
                  <td>WorkShop</td>
                  <td>2-3-2024</td>
                  <td>Seminar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
