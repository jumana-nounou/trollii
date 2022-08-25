import {
  Typography,
  Tab,
  Tabs,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
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
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <div
        href="/"
        className="logo"
        style={{
          position: "absolute",
          left: 80,
          top: 14,
        }}
      >
        <Typography
          style={{
            position: "absolute",
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
      </div>
      <div
        className="tabs"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <Tabs
          value={value}
          onChange={handlevalue}
          aria-label="icon position tabs example"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            color: "#FFC725",
          }}
        >
          <Tab
            style={{
              position: "absolute",
              top: 14,
              right: 527,
              // left: 862,
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
              position: "absolute",
              top: 14,
              right: 429,
              // left: 963,
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
              position: "absolute",
              top: 14,
              right: 338,
              // left: 1061,
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
      </div>
      <div className="country" style={{}}>
        <FormControl
          variant="outlined"
          style={{
            postition: "absolute",
            borderColor: "white",
            position: "absolute",
            right: "17.8%",
            top: 14,
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
      </div>
      <div
        className="login"
        style={{
          position: "absolute",
          top: 14,
          right: 80,
          width: "7.4%",
          height: "22.45%",
        }}
      >
        <Button
          style={{
            position: "absolute",
            backgroundColor: "#5F41B3",
            borderRadius: 10,
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
