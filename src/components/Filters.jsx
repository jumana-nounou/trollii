import { Typography, Grid, Slider, Divider, Rating } from "@mui/material";
import * as React from "react";
import { Box, Checkbox } from "@mui/joy";

const Filters = () => {
  return (
    <Grid
      container
      alignItems="left"
      justifyContent="left"
      direction="column"
      rowSpacing={3}
      display="flex"
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
            width: "85%",
          }}
        >
          map
        </Box>
      </Grid>
      <br />
      <Divider sx={{ width: "85%" }}></Divider>
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
      <Divider sx={{ width: "85%" }}></Divider>

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
      <Divider sx={{ width: "85%" }}></Divider>

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
        <br />
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
        <br />

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
      <Divider sx={{ width: "85%" }}></Divider>
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
    </Grid>
  );
};

export default Filters;
