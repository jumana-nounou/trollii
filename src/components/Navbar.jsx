import {
  Typography,
  Tab,
  Tabs,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import * as React from "react";

const Navbar = (props) => {
  const [value, setValue] = React.useState(0);
  const [country, setCountry] = React.useState("");

  const handlevalue = (event, newValue) => {
    setValue(newValue);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light w-100 "
      style={{
        height: "9%",
        boxShadow: "0px 2px 8px rgba(38, 36, 131, 0.05)",
        width: "100%",
        left: 0,
        top: 0,
        display: "flex",
      }}
    >
      <Grid container sx={{ pt: 1 }}>
        <Grid item md={6} sm={6} href="/">
          <Typography
            style={{
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
          md={4}
          sm={4}
          className="tabs"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handlevalue}
            style={{
              height: "100%",
              width: "100%",
              // position: "absolute",
              color: "#FFC725",
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
                height: "70%",
              }}
              label="Flights"
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
              label="Hotels"
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
              label="Tours"
            />
          </Tabs>
        </Grid>
        <Grid item md={1} sm={1}>
          <FormControl
            style={{
              borderColor: "white",
              height: "10%",
            }}
          >
            <InputLabel
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "20%",
                color: "white",
                borderBlockColor: "white",
              }}
            ></InputLabel>
            <Select
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 16,
                textAlign: "center",
              }}
              value={country}
              onChange={handleCountry}
            >
              <MenuItem value={10}>EGY</MenuItem>
              <MenuItem value={20}>UK</MenuItem>
              <MenuItem value={30}>US</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={1} sm={1}>
          <Button
            style={{
              backgroundColor: "#5F41B3",
              borderRadius: 10,
            }}
            variant="contained"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
