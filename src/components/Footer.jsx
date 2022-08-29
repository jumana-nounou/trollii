import { Typography, Link, Grid } from "@mui/material";
import * as React from "react";

const footer = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        minHeight: "100",
        width: "100%",
        height: "25%",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.1)",
        margin: 0,
        bottom: 0,
        left: "0%",
      }}
    >
      <Grid
        item
        md={2}
        href="/"
        className="logo"
        style={{
          left: 80,
          top: 14,
          height: "1.145%",
        }}
      >
        <Typography
          style={{
            // position: "absolute",
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
      </Grid>
      <Grid
        item
        md={2}
        className="company"
        style={{
          left: "23%",
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
      </Grid>

      <Grid
        item
        className="legal"
        md={2}
        style={{
          left: "37%",
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
      </Grid>

      <Grid
        item
        md={2}
        className="mb-4 mb-md-0"
        style={{
          left: "50%",
          // position: "absolute"
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
      </Grid>

      <Grid
        item
        md={2}
        className="socialmedia"
        style={{
          left: "63.75%",
          // position: "absolute"
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
      </Grid>
      <Grid
        style={{
          left: "79.86%",
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
      </Grid>
    </Grid>
  );
};

export default footer;
