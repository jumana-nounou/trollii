import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  IconButton,
  Button,
  Modal,
  LinearProgress,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const [boardingScreen, setBoardingScreen] = useState(1);

  return (
    <>
      {(isMD && (
        <>
          {boardingScreen === 1 && (
            <div
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zindex: -100,
                backgroundImage: "url('./imgs/home.jpg')",
              }}
            >
              <div>
                <div
                  style={{
                    margin: 0,
                    top: 560,
                    width: "80%",
                    height: "90%",
                    position: "absolute",
                    left: 16,
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Up for a travel ?
                  </h1>
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "white",
                    }}
                  >
                    Use Trollii to search for the cheapest hotel deal for all
                    major destinations around the world.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  style={{
                    position: "absolute",
                    top: 730,
                    left: 16,
                    width: "91%",
                    height: "6%",
                    filter:
                      "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))",
                  }}
                  onClick={() => {
                    setBoardingScreen(2);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
          {boardingScreen === 2 && (
            <div
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zindex: -100,
              }}
            >
              <div className="skip">
                <Button
                  style={{
                    position: "absolute",
                    width: "8.6%",
                    height: "3%",
                    top: 62,
                    left: 313,
                    color: "707070",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  variant="text"
                  onClick={() => navigate("/signIn")}
                >
                  skip
                </Button>
              </div>

              <div>
                <img
                  src="imgs/img2.svg"
                  alt=" "
                  style={{
                    objectFit: "fill",
                    margin: 0,
                    position: "absolute",
                    width: "94.4%",
                    height: "42.5%",
                    top: 135,
                    left: 15,
                  }}
                ></img>
              </div>

              <div
                style={{
                  margin: 0,
                  top: 526,
                  width: "91.66%",
                  height: "14.5%",
                  position: "absolute",
                  left: 15,
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "black",
                    margin: 0,
                  }}
                >
                  Customize your reservation
                </h2>
                <h4 style={{ color: "black" }}>
                  Choose the hotel area, your check in, check out and even how
                  many rooms you want!
                </h4>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    margin: 0,
                    top: 720,
                    width: "91.11%",
                    height: "6%",
                    position: "absolute",
                    left: 16,
                    filter:
                      "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))",
                  }}
                  onClick={() => {
                    setBoardingScreen(3);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {boardingScreen === 3 && (
            <div
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zindex: -100,
              }}
            >
              <div>
                <Button
                  style={{
                    position: "absolute",
                    width: "8.6%",
                    height: "3%",
                    top: 62,
                    left: 313,
                    color: "707070",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  variant="text"
                  onClick={() => navigate("/signIn")}
                >
                  skip
                </Button>
              </div>
              <div>
                <img
                  src="imgs/img3.svg"
                  alt=" "
                  style={{
                    objectFit: "fill",
                    margin: 0,
                    position: "absolute",
                    width: "94.4%",
                    height: "42.5%",
                    top: 135,
                    left: 15,
                  }}
                ></img>
              </div>

              <div
                style={{
                  margin: 0,
                  top: 526,
                  width: "86.9%",
                  height: "11.5%",
                  position: "absolute",
                  left: 24,
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "black",
                    margin: 0,
                  }}
                >
                  Book your desired hotel
                </h2>
                <h4 style={{ color: "black" }}>
                  Look for reviews, facilities, price and more details about the
                  hotel
                </h4>
              </div>

              <div>
                <Button
                  variant="contained"
                  style={{
                    margin: 0,
                    top: 720,
                    width: "91.11%",
                    height: "6%",
                    position: "absolute",
                    left: 16,
                    filter:
                      "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))",
                  }}
                  onClick={() => {
                    setBoardingScreen(4);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          {boardingScreen === 4 && (
            <div
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zindex: -100,
              }}
            >
              <div>
                <img
                  src="imgs/img4.svg"
                  alt=" "
                  style={{
                    objectFit: "fill",
                    margin: 0,
                    position: "absolute",
                    width: "94.4%",
                    height: "42.5%",
                    top: 135,
                    left: 15,
                  }}
                ></img>
              </div>

              <div
                style={{
                  margin: 0,
                  top: 526,
                  width: "86.9%",
                  height: "11.5%",
                  position: "absolute",
                  left: 24,
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "black",
                    margin: 0,
                  }}
                >
                  Congratulations!
                </h2>
                <h4 style={{ color: "black" }}>
                  Have fun searching and finding the most suitable hotel for
                  yourself
                </h4>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    margin: 0,
                    top: 720,
                    width: "91.11%",
                    height: "6%",
                    position: "absolute",
                    left: 16,
                    filter:
                      "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))",
                  }}
                  onClick={() => navigate("/signIn")}
                >
                  Sign IN
                </Button>
              </div>
            </div>
          )}
        </>
      )) || <>//if desktop</>}
    </>
  );
};
export default Home;
