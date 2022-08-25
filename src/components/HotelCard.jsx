import {
  Typography,
  Link,
  Box,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";

import * as React from "react";
const hotelCard = () => {
  return (
    <Box
      minHeight={40}
      style={{
        left: "29.16%",
        borderRadius: 20,
        boxSizing: "border-box",
        border: "1px solid #C4C4C4",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.25)",
      }}
    >
      <Card
        variant="outlined"
        style={{ position: "absolute", width: "100%", height: "40%" }}
      >
        <CardContent>
          <CardMedia
            component="img"
            image={'URL("imgs/hotel.png")'}
            style={{
              // backgroundImage: URL("../views/imgs/hotel.png"),
              backgroundColor: "royalblue",
              width: "30.2%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: 1,
            }}
          />
          <Typography
            style={{
              position: "absolute",
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
          <Typography
            variant="subtitle"
            style={{
              position: "absolute",
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
          <Typography>nmfdl,;wdc,l</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default hotelCard;
