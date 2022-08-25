import { Typography, Link } from "@mui/material";
import * as React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const footer = () => {
  return (
    <div
      className="container"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        top: "100%",
        width: "100%",
        height: "25%",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.1)",
      }}
    >
      <div
        href="/"
        className="logo"
        style={{
          position: "absolute",
          left: 80,
          top: 14,
          height: "1.145%",
        }}
      >
        <Typography
          style={{
            position: "absolute",
            color: "#5F41B3",
            fontFamily: "Fredoka",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 35,
            lineHeight: "42px",
            letterSpacing: -0.3,
          }}
        >
          Trollii
        </Typography>
      </div>
      <div className="links">
        <MDBRow
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            margin: 0,
          }}
        >
          <MDBCol
            className="company"
            style={{
              left: "23%",
              position: "absolute",
              margin: 0,
            }}
          >
            <h5
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
              }}
            >
              Company
            </h5>

            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                About
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Mobile
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Blog
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                How we work
              </Link>
            </li>
          </MDBCol>

          <MDBCol
            className="legal"
            style={{
              left: "37%",
              position: "absolute",
              margin: 0,
            }}
          >
            <h5
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
              }}
            >
              Legal
            </h5>

            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Terms & Conditions
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Privacy policy
              </Link>
            </li>
          </MDBCol>

          <MDBCol
            className="mb-4 mb-md-0"
            style={{ left: "50%", position: "absolute" }}
          >
            <h5
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
              }}
            >
              Support
            </h5>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Contact Us
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                FAQs
              </Link>
            </li>
          </MDBCol>

          <MDBCol
            className="socialmedia"
            style={{ left: "63.75%", position: "absolute" }}
          >
            <h5
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
              }}
            >
              Social media
            </h5>

            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Facebook
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Linkedin
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Instagram
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Twitter
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Youtube
              </Link>
            </li>
          </MDBCol>
          <MDBCol
            className="mb-4 mb-md-0"
            style={{ left: "79.86%", position: "absolute" }}
          >
            <h5
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
              }}
            >
              More
            </h5>

            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Airline fees
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Airlines
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Partners
              </Link>
            </li>
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#362566",
                }}
                to="/example"
              >
                Advertise with us
              </Link>
            </li>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default footer;
