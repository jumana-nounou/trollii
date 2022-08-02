import { useState, useEffect } from "react";
// import {ReactComponent as imag2} from "./img2.svg";
//import img3 from "./img3.svg";
import {
  Card,
  Grid,
  IconButton,
  Button,
  Modal,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const [boardingScreen, setBoardingScreen] = useState(0);

  return (
    <>
      {(isMD && (
        <>
          {boardingScreen === 0 && (
            <div
              style={{
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zindex: -100,
                backgroundImage: "url('./home.jpg')",
              }}
            >
              <div>
                <h1
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  Up for a travel?
                </h1>
                <h4 style={{ color: "white" }}>
                  Use Trollii to search for the cheapest hotel deal for all
                  major destinations around the world.
                </h4>
                <Button
                  variant="contained"
                  onClick={() => {
                    setBoardingScreen(1);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
          {boardingScreen === 1 && (
            <>
              <img src="./img2.svg" alt="" />
            </>
          )}
        </>
      )) || <>//if desktop</>}
    </>
  );
};
export default Home;
