import {
  Typography,
  Link,
  Box,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
  Rating,
  Icon,
} from "@mui/material";
import PoolRoundedIcon from "@mui/icons-material/PoolRounded";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import * as React from "react";
import PoolRounded from "@mui/icons-material/PoolRounded";
const hotelCard = () => {
  return (
    <Box
      minHeight={30}
      style={{
        left: "29.16%",
        borderRadius: 20,
        boxSizing: "border-box",
        border: "1px solid #C4C4C4",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <CardMedia
            component="img"
            image={'URL("imgs/hotel.png")'}
            style={{
              // backgroundImage: URL("../views/imgs/hotel.png"),
              backgroundColor: "royalblue",

              left: 0,
              top: 1,
            }}
          />
          <Typography
            style={{
              left: 200,
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "22",
              color: "#362566",
            }}
          >
            intercontinental cairo semiramis, IHG Hotel
          </Typography>
          <Rating readonly defaultValue={5}></Rating>
          <Typography
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

          <Typography
            variant="subtitle"
            style={{
              left: 200,
              top: 70,
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 14,
              color: "#5D5C66",
            }}
          >
            700 m from Great Sphinx, Pyramid Stars Inn is set concierge free
            WiFi, express check-in and check-out and The check-out accommodation
            offers a 24-hour front desk.... More
          </Typography>
          <Typography
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
          <Icon></Icon>
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
          <PoolRounded md={{ color: "#5F41B3" }} />
          <WifiIcon color="primary" />
          <FitnessCenterIcon />
          <RestaurantIcon />
          <LocalParkingIcon />
          <LocalCafeIcon />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="filled"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 16,
              backgroundColor: "#5F41B3",
              borderRadius: 10,
              color: "white",
            }}
          >
            Select
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default hotelCard;
