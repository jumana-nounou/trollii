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
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:400,
                      fontStyle:"normal",
                      fontSize:17
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
                    bottom:20,
                    left: 16,
                    width: "91%",
                    height: "6%",
                    boxSizing:"border-box",
                    borderRadius:8,
                    color: "white",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:400,
                      fontStyle:"normal",
                      fontSize:17
                    
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
                    right: 13,
                    color: "gray",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight:400,
                    fontStyle:"normal",
                    fontSize:16,
                    letterSpacing:-0.3
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
                    bottom:"68.97%",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:600,
                      fontStyle:"normal",
                      fontSize:24,
                      lineHeight:1,
                      letterSpacing:-0.3
                  }}
                >
                  Customize your reservation
                </h2>
                <h4 style={{ 
                left:"2.73%",
                right:"2.42%",
                top:"37.93%",
                color : "black",
                fontFamily: "'Poppins', sans-serif",
                fontWeight:400,
                fontStyle:"normal",
                fontSize:16,
                textAlign:"center",
                letterSpacing:-0.3}}>
                  Choose the hotel area, your check in, check out and even how
                  many rooms you want !
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
                    boxSizing:"border-box",
                    borderRadius:8,
                    color: "white",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:500,
                      fontStyle:"normal",
                      fontSize:16,
                      letterSpacing:-0.3
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
                    right: 13,
                    color: "gray",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight:400,
                    fontStyle:"normal",
                    fontSize:16,
                    letterSpacing:-0.3
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
                  left:24 ,
                  textAlign: "center",
                  
                }}
              >
                <h2
                  style={{
                    color: "black",
                    margin: 0,
                    position: "absolute",
                    left:"5.11%",
                    bottom:"60.87%",
                    right:"5.43%",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight:600,
                    fontStyle:"normal",
                    fontSize:24,
                    letterSpacing:-0.3,
                    textAlign:"center",
                    
                  }}
                >
                  Book your desired hotel
                </h2>
                <h4 style={{ color: "black",
                    margin: 0,
                    position: "absolute",
                    top:"47.83%",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight:400,
                    fontStyle:"normal",
                    fontSize:16,
                    letterSpacing:-0.3,
                    textAlign:"center", }}>
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
                    boxSizing:"border-box",
                    borderRadius:8,
                    color: "white",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:500,
                      fontStyle:"normal",
                      fontSize:16,
                      letterSpacing:-0.3
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
                <h4 style={{ color: "black",
               margin: 0,
               position: "absolute",
               top:"47.83%",
               fontFamily: "'Poppins', sans-serif",
               fontWeight:400,
               fontStyle:"normal",
               fontSize:16,
               letterSpacing:-0.3,
               textAlign:"center", }}>
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
                    boxSizing:"border-box",
                    borderRadius:8,
                    color: "white",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight:500,
                      fontStyle:"normal",
                      fontSize:16,
                      letterSpacing:-0.3
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
