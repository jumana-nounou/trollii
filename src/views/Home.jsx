import React from "react";
import {
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  InputAdornment,
  Link,
  Tabs,
  Tab,
  Divider,
  Rating,
  Slider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Checkbox } from "@mui/joy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Navbar />
          <br />
          <br />
          <br />

          {/* <Grid
            container
            justifyContent="space-evenly"
            rowSpacing={2}
            columnSpacing={1}
            style={{
              width: "83.33%",
              boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
              borderRadius: 20,
            }}
          >
            <Grid item md={3}>
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
                  boxSizing: "border-box",
                  borderRadius: 15,
                }}
              />
            </Grid>
            <Grid item md={3}>
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
                  boxSizing: "border-box",
                  borderRadius: 15,
                }}
              />
            </Grid>
            <Grid item md={2}>
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
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                style={{
                  boxSizing: "border-box",
                  borderRadius: 15,
                }}
              />
            </Grid>
            <Grid item md={2}>
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
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                style={{
                  boxSizing: "border-box",
                  borderRadius: 15,
                }}
              />
            </Grid>
            <Grid item md={8}>
              <Link
                component="button"
                underline="none"
                onClick={() => {
                  console.log("hola");
                }}
                variant="filled"
                style={{
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
              </Link>
            </Grid>
          </Grid> */}
          {/* <Grid
            container
            alignItems="left"
            justifyContent="left"
            direction="column"
            width="17%"
            rowSpacing={3}
          >
            <Grid item md={12}>
              <Typography
                style={{
                  color: "#362566",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                View on map
              </Typography>
              <Box
                style={{
                  backgroundColor: "blueviolet",
                }}
              >
                map
              </Box>
            </Grid>
            <Divider></Divider>
            <Grid item md={12}>
              <Typography
                style={{
                  color: "#362566",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                Filters
              </Typography>
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                123/1234 Results
              </Typography>
              <br />
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                Rating
              </Typography>
              <br />

              <Checkbox
                defaultChecked
                style={{ color: "#5F41B3" }}
                variant="outlined"
              />
              <Rating readOnly defaultValue={5} />
              <br />
              <Checkbox
                defaultChecked
                style={{ color: "#5F41B3" }}
                variant="outlined"
              />
              <Rating readOnly defaultValue={4} />
              <br />
              <Checkbox
                defaultChecked
                style={{ color: "#5F41B3" }}
                variant="outlined"
              />
              <Rating readOnly defaultValue={3} />
              <br />
              <Checkbox
                defaultChecked
                style={{ color: "#5F41B3" }}
                variant="outlined"
              />
              <Rating readOnly defaultValue={2} />
              <br />
              <Checkbox
                defaultChecked
                style={{ color: "#5F41B3" }}
                variant="outlined"
              />
              <Rating readOnly defaultValue={1} />
            </Grid>
            <Divider></Divider>

            <Grid item md={12}>
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                Price
              </Typography>
              <Slider
                size="small"
                style={{ width: "80%", color: "#5F41B3" }}
              ></Slider>
            </Grid>
            <Divider></Divider>

            <Grid item md={12}>
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                Amenities
              </Typography>
              <br />

              <Checkbox
                variant="outlined"
                label="Select all amenities"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                }}
              />
              <br />
              <br />

              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "left",
                }}
              >
                Amenities
              </Typography>
              <br />
              <Checkbox
                variant="outlined"
                label="Gym"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Hot tub"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Free wi-fi"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <Checkbox
                variant="outlined"
                label="Free airport shuttle"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <Checkbox
                variant="outlined"
                label="Air conditioned"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Pool"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />

              <Checkbox
                variant="outlined"
                label="Washer and dryer"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Pet-friendly"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />

              <Checkbox
                variant="outlined"
                label="Restaurants"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
            </Grid>
            <br />
            <Divider></Divider>
            <Grid item md={12}>
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                Board
              </Typography>
              <br />
              <Checkbox
                variant="outlined"
                label="Select all types"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                }}
              />
              <br />
              <br />
              <Typography
                style={{
                  color: "#5D5C66",
                  textTransform: "none",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "left",
                }}
              >
                Board types
              </Typography>
              <br />
              <Checkbox
                variant="outlined"
                label="Room only"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Hot tub"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Bed and Breakfast"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Half Board"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
              <Checkbox
                variant="outlined"
                label="Full Board"
                style={{
                  color: "#362566",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              />
              <br />
            </Grid>
          </Grid> */}

          <Grid
            container
            maxWidth="55%"
            rowSpacing={3}
            // bgcolor="pink"
            top={90}
          >
            <Grid item md={12} justifyContent="space-evenly">
              <Tabs
                value={value}
                onChange={handlevalue}
                aria-label="icon position tabs example"
                style={{
                  color: "#FFC725",
                  boxSizing: "border-box",
                  border: "1px solid #C4C4C4",
                  borderRadius: 20,
                }}
              >
                <Tab
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    textTransform: "none",
                    color: "#362566",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                  label="Recommended"
                />

                <Tab
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    textTransform: "none",
                    color: "#362566",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                  label="Top rated"
                />

                <Tab
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    textTransform: "none",
                    color: "#362566",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                  label="Most Popular"
                />

                <Tab
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    textTransform: "none",
                    color: "#362566",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                  label="Cheapest"
                />
              </Tabs>
            </Grid>
            <Grid item md={12}>
              <HotelCard />
            </Grid>
          </Grid>
          <Footer />
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
