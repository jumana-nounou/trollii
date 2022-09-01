import React from "react";
import {
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import Filters from "../components/Filters";
const HotelResults = () => {
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
        <div style={{ flex: 1 }}>
          <Navbar />
          <br />
          <br />
          <br />
          <Grid container>
            <Grid item md={1} />
            <Grid item md={10}>
              <Grid
                container
                justifyContent="space-evenly"
                style={{
                  boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
                  borderRadius: 20,
                  flexDirection: "column",
                }}
                sx={{ pt: 2, pb: 2 }}
              >
                <Grid container columnSpacing={3}>
                  <Grid item md={1} />
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
                      sx={{ borderRadius: "15" }}
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
                </Grid>
                <br />
                <Grid container>
                  <Grid item md={4} />
                  <Grid
                    item
                    md={3}
                    bgcolor="#5F41B3"
                    sx={{
                      //justifyContent: "center",
                      // alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Button
                      sx={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: 16,
                        textTransform: "none",
                        justifyContent: "center",
                        alignItems: "center",
                        //paddingLeft: "50%",
                        // paddingRight: "50%",
                      }}
                    >
                      Search Hotels
                    </Button>
                  </Grid>
                  <Grid item md={5} />
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <Grid container>
                <Grid item md={3}>
                  <Filters />
                </Grid>
                <Grid item md={9}>
                  <Grid container>
                    <Grid
                      item
                      md={12}
                      justifyContent="space-evenly"
                      sx={{ pr: 1, pl: 1 }}
                    >
                      <Tabs
                        value={value}
                        centered
                        onChange={handlevalue}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "stretch",
                        }}
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
                        <Divider vertical sx={{ color: "gray" }} />
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
                        <Divider vertical sx={{ color: "gray" }} />

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
                        <Divider vertical sx={{ color: "gray" }} />

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
                    <br />
                    <br />
                    <br />
                    <Grid item md={12}>
                      <HotelCard />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={1} />
          </Grid>
          <br />
          <br />
          <br />

          <Footer />
        </div>
      )) || <div>//</div>}
    </>
  );
};
export default HotelResults;
