import React from "react";
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
  TextField,
  InputAdornment,
  Box,
  Link,
  Tabs,
  Tab,
  Divider,
  Container,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handlevalue = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {(!isMD && (
        <div fluid style={{ overflowY: "scroll" }}>
          <Navbar />
          <div className="filter1">
            <Grid
              container
              justifyContent="space-evenly"
              spacing={2}
              alignItems="stretch"
              style={{
                position: "absolute",
                width: "83.33%",
                height: "20%",
                left: 120,
                right: 120,
                top: 120,
                boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
                borderRadius: 20,
              }}
            >
              <Grid
                item
                md={3}
                style={{
                  height: "50%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle"
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  Destination
                </Typography>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  style={{
                    width: "100%",
                    position: "relative",
                    height: "7%",
                    boxSizing: "border-box",
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid
                item
                md={3}
                style={{
                  height: "50%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle"
                  style={{
                    top: 15,
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  Travellers
                </Typography>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  style={{
                    width: "100%",
                    position: "relative",
                    height: "7%",
                    boxSizing: "border-box",
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid
                item
                md={2}
                style={{
                  height: "50%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle"
                  style={{
                    top: 15,
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  Check-in
                </Typography>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  style={{
                    width: "100%",
                    position: "relative",
                    height: "7%",
                    boxSizing: "border-box",
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid
                item
                md={2}
                style={{
                  height: "50%",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle"
                  style={{
                    top: 15,
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  Check-out
                </Typography>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PlaceOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  style={{
                    width: "100%",
                    position: "relative",
                    height: "7%",
                    boxSizing: "border-box",
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid
                item
                md={4}
                style={{
                  height: "40%",
                  width: "90%",
                }}
              >
                <Button
                  variant="filled"
                  style={{
                    position: "absolute",
                    backgroundColor: "#5F41B3",
                    borderRadius: 10,
                    width: "30%",
                    top: 85,
                    textTransform: "none",
                    color: "white",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  Search Hotels
                </Button>
              </Grid>
            </Grid>
          </div>

          <div className="maps">
            <Link
              variant="subtitle"
              style={{
                position: "absolute",
                top: 370,
                left: 120,
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500%",
                fontSize: 16,
                color: "#362566",
                textDecoration: "none",
              }}
              to="/example"
            >
              View on Map
            </Link>
            <Box
              style={{
                position: "absolute",
                width: "17.22%",
                height: "15.4%",
                top: 395,
                left: 120,
                backgroundColor: "blueviolet",
              }}
            ></Box>
          </div>
          <Grid
            container
            justifyContent="space-evenly"
            md={12}
            spacing={0}
            alignItems="stretch"
            style={{
              position: "absolute",
              height: "70%",
              left: 300,
              width: "62.5%",
              top: "50.2%",
              bottom: "30%",
              boxShadow: "0 2 8 rgba(38, 36, 131, 0.25)",
              borderRadius: 20,
            }}
          >
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
          </Grid>
          <div
            className="tabs"
            style={{
              position: "absolute",
              width: "62.5%",
              top: "40.2%",
              left: "33%",
            }}
          >
            <Tabs
              value={value}
              onChange={handlevalue}
              aria-label="icon position tabs example"
              style={{
                height: "2.5%",
                width: "100%",
                position: "absolute",
                color: "#FFC725",
                boxSizing: "border-box",
                border: "1px solid #C4C4C4",
                borderRadius: 20,
              }}
            >
              <Divider
                orientation="vertical"
                variant="middle"
                light
                style={{ top: 52, color: "red", left: "16.6%" }}
              />
              <Tab
                style={{
                  position: "absolute",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  textTransform: "none",
                  color: "#362566",
                  fontSize: 16,
                  fontWeight: 400,
                  left: "0%",
                }}
                label="Recommended"
              />
              <Tab
                style={{
                  position: "absolute",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  textTransform: "none",
                  color: "#362566",
                  fontSize: 16,
                  fontWeight: 400,
                  left: "27%",
                }}
                label="Top rated"
              />

              <Tab
                style={{
                  position: "absolute",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  textTransform: "none",
                  color: "#362566",
                  fontSize: 16,
                  fontWeight: 400,
                  left: "50%",
                }}
                label="Most Popular"
              />

              <Tab
                style={{
                  position: "absolute",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  textTransform: "none",
                  color: "#362566",
                  fontSize: 16,
                  fontWeight: 400,
                  left: "75%",
                }}
                label="Cheapest"
              />
            </Tabs>
          </div>
          {/* <Footer /> */}
        </div>
      )) || (
        <div style={{ position: "relative" }}>
          <Navbar style={{ position: "relative", top: 0 }} />
          <Grid
            container
            justifyContent="space-evenly"
            md={12}
            spacing={0}
            alignItems="stretch"
            style={{
              position: "relative",
              height: "70%",
              left: 300,
              width: "62.5%",
              top: "50.2%",
              bottom: "30%",
              boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
              borderRadius: 20,
              backgroundColor: "pink",
            }}
          >
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
          </Grid>
          <Footer style={{ position: "relative", bottom: 0 }} />
        </div>
      )}
    </>
  );
};
export default Home;
