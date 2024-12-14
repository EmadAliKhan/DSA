import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 jacques-francois-shadow-regular">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="https://portal-duet.msappproxy.net/Content/Img/duet_logo.png"
            alt="Duet Logo"
            className="img-fluid"
            width="200px"
          />
        </div>

        {/* Login Options */}
        <div className="d-flex justify-content-center flex-column">
          <div className="mt-4">
            <span
              className="bg-dark text-light px-5 py-2 fs-5 rounded"
              type="button"
              onClick={() => {
                navigate("/form", { state: { type: "Society" } });
              }}
            >
              Login with Society
            </span>
          </div>
          <div className="mt-3">
            <span
              className="bg-dark text-light px-5 py-2 fs-5 rounded "
              type="button"
              onClick={() => {
                navigate("/form", { state: { type: "DSA" } });
              }}
            >
              Login with DSA
            </span>
          </div>
          <div className="mt-3">
            <span
              className="bg-dark text-light px-5 py-2 fs-5 rounded"
              type="button"
              onClick={() => {
                navigate("/form", { state: { type: "Chairman" } });
              }}
            >
              Login with Chairman
            </span>
          </div>
        </div>

        {/* For Queries Section */}
        <div className="mt-5">
          <h5>For Queries?</h5>
          <p>
            <WhatsAppIcon style={{ color: "green", fontSize: "40px" }} />
            <a
              href="/whatsapp"
              className="text-decoration-none fs-5 pt-2"
              style={{ color: "green" }}
            >
              0318-6342262
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
