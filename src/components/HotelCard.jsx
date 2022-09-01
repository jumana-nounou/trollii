import * as React from "react";
import Owl from "./Owl";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import {
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
  Rating,
  Grid,
} from "@mui/material";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PoolRoundedIcon from "@mui/icons-material/PoolRounded";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00A698",
  },
  "& .MuiRating-iconHover": {
    color: "#00A698",
  },
});
const hotelCard = () => {
  return (
    <Card
      variant="outlined"
      style={{ borderRadius: 20, margin: 0 }}
      sx={{
        boxSizing: "border-box",
        border: "1px solid #C4C4C4",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
        display: "flex",
      }}
    >
      <CardContent>
        <Grid container sx={{ margin: 0 }} margin={0}>
          <Grid item md={3.75} bgcolor="royalblue">
            <CardMedia
              component="img"
              image="../public/imgs/hotel.png"
              sx={{
                alignItems: "left",
              }}
            />
          </Grid>
          <Grid item md={0.25} />
          <Grid item md={8}>
            <Grid container>
              <Grid item md={11}>
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "22",
                    color: "#362566",
                    textAlign: "left",
                  }}
                >
                  intercontinental cairo semiramis, IHG Hotel
                </Typography>
              </Grid>
              <Grid item md={1}>
                <BookmarkIcon fontSize="large" color="disabled" />
              </Grid>
              <Grid item md={12} sx={{ display: "flex" }} justifyContent="left">
                <Rating alreadonly defaultValue={5}></Rating>
                &nbsp;
                <Typography
                  align="right"
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  Cairo, Egypt
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography
                  variant="subtitle"
                  align="left"
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#5D5C66",
                  }}
                >
                  700 m from Great Sphinx, Pyramid Stars Inn is set concierge
                  free WiFi, express check-in and check-out and The check-out
                  accommodation offers a 24-hour front desk.... More
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Grid container>
                  <Grid item md={9} sx={{ display: "flex" }}>
                    <Typography
                      align="right"
                      style={{
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#000000",
                      }}
                    >
                      4.5/5
                    </Typography>
                    &nbsp;
                    <Owl />
                    <StyledRating
                      readOnly
                      defaultValue={4.5}
                      precision={0.5}
                      max={5}
                      size="small"
                      icon={<FiberManualRecordSharpIcon fontSize="small" />}
                      emptyIcon={
                        <FiberManualRecordSharpIcon fontSize="small" />
                      }
                    />
                    <Typography
                      style={{
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: 300,
                        fontSize: 14,
                        color: "#5D5C66",
                      }}
                    >
                      7,262 Reviews
                    </Typography>
                  </Grid>
                  <Grid item md={3} />
                  <Grid item md={12} justifyContent="right" alignItems="normal">
                    <Typography
                      align="right"
                      style={{
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: 22,
                        color: "#5F41B3",
                      }}
                    >
                      EGP 11,600
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={12} sx={{ display: "flex" }}>
                <Grid container sx={{ display: "flex" }}>
                  <Grid item md={6}>
                    <PoolRoundedIcon sx={{ color: purple[900] }} />
                    &nbsp;
                    <WifiIcon sx={{ color: purple[900] }} />
                    &nbsp;
                    <FitnessCenterIcon sx={{ color: purple[900] }} />
                    &nbsp;
                    <RestaurantIcon sx={{ color: purple[900] }} />
                    &nbsp;
                    <LocalParkingIcon sx={{ color: purple[900] }} />
                    &nbsp;
                    <LocalCafeIcon sx={{ color: purple[900] }} />
                  </Grid>
                  <Grid item md={6} justifyContent="right">
                    <CardActions justifyContent="right">
                      <Button
                        sx={{ alignItems: "revert", justifyContent: "right" }}
                        size="medium"
                        variant="filled"
                        style={{
                          backgroundColor: "#5F41B3",
                          borderRadius: 10,
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 16,
                            color: "white",
                            textTransform: "none",
                          }}
                        >
                          Select rooms
                        </Typography>
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default hotelCard;
