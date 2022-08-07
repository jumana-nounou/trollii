import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  IconButton,
  Button,
  Modal,
  LinearProgress,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Container,
  Icon,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { border, fontSize } from "@mui/system";

const SignIn = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //setLoading(true)
    try {
      //data to backend to authenticate sign in
      //then redirect to homepage
    } catch (error) {
      //if error snackbar
    }
    //  navigate("/Homepage")

    //setLoading(false)
  };

  return (
    <>
      {(isMD && (
        <>
          <div>
            <div className="skipBtn">
              <Button
                style={{
                  position: "absolute",
                  margin: 0,
                  width: "8.6%",
                  height: "3%",
                  top: 62,
                  right: 13,
                  color: "gray",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 16,
                  letterSpacing: -0.3,
                  textTransform: "lowercase",
                }}
                variant="text"
                onClick={() => navigate("/Homepage")}
              >
                skip
              </Button>
            </div>

            <div className="signintitle">
              <Typography
                variant="h1"
                style={{
                  color: "black",
                  position: "absolute",
                  width: "62.5%",
                  height: "12%",
                  left: 16,
                  top: 53,
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: "Medium",
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: "120%",
                  letterSpacing: -0.3,
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              >
                Sign in to your account
              </Typography>
            </div>

            <div className="container">
              <Container>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    margin: 0,
                    width: "91.11%",
                    left: 16,
                    height: "10.375%",
                    top: 173,
                  }}
                >
                  <div className="email">
                    <Typography
                      style={{
                        color: "gray",
                        position: "absolute",
                        top: 173,
                        left: 16,
                        width: "13.3%",
                        height: "3.375%",
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: 18,
                        textTransform: "none",
                        textAlign: "left",
                        verticalAlign: "top",
                        lineHeight: "100%",
                      }}
                    >
                      Email
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      style={{
                        position: "absolute",
                        width: "91.11%",
                        height: "6%",
                        borderRadius: 8,
                        left: 16,
                        top: 208,
                        margin: 0,
                      }}
                      {...register("email", { required: true })}
                    />
                  </div>
                  <br />

                  <div className="password">
                    <Typography
                      style={{
                        color: "gray",
                        position: "absolute",
                        top: 280,
                        left: 16,
                        width: "13.3%",
                        height: "3.375%",
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: 18,
                        textTransform: "none",
                        textAlign: "left",
                        verticalAlign: "top",
                        lineHeight: "100%",
                      }}
                    >
                      Password
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      style={{
                        position: "absolute",
                        width: "91.11%",
                        height: "6%",
                        borderRadius: 8,
                        left: 16,
                        top: 315,
                        margin: 0,
                      }}
                      {...register("password", { required: true })}
                    />
                  </div>

                  <div
                    className="forgotPass"
                    style={{
                      position: "absolute",
                      height: "3%",
                      top: 387,
                      left: 16,
                      width: "91.11%",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{
                            height: "3%",

                            width: "91.11%",
                          }}
                          defaultChecked
                        />
                      }
                      label="remember me"
                      style={{
                        borderRadius: 8,
                        fontFamily: "'Poppins', sans-serif",
                        fontStyle: "normal",
                        fontSize: 17,
                        textTransform: "none",
                      }}
                    />
                    <Link
                      style={{
                        left: 206,
                        top: 387,
                        color: "#1F90D0",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: 16,
                        textAlign: "left",
                        textDecorationLine: "underline",
                        lineHeight: "100%",
                      }}
                      href="#"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="signinbtn">
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        margin: 0,
                        top: 435,
                        width: "91.11%",
                        height: "6%",
                        position: "absolute",
                        left: 16,
                        boxSizing: "border-box",
                        borderRadius: 8,
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                        fontStyle: "normal",
                        fontSize: 16,
                        letterSpacing: -0.3,
                        textTransform: "none",
                      }}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      Sign in
                    </Button>
                  </div>
                </form>

                <div className="or">
                  <Typography
                    style={{
                      color: "black",
                      top: 490,
                      width: "100%",
                      height: "3%",
                      position: "relative",
                      boxSizing: "border-box",
                      borderRadius: 8,
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: 16,
                      letterSpacing: -0.3,
                      textAlign: "center",
                    }}
                    variant="h6"
                    display="block"
                    gutterBottom
                  >
                    or
                  </Typography>
                </div>

                <div
                  className="signInwith3rdparty"
                  style={{
                    position: "absolute",
                    left: 59,
                    right: 61,
                    bottom: 189,
                  }}
                >
                  <Grid
                    container
                    spacing={0.5}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  >
                    <Grid
                      item
                      xs={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        objectFit: "fill",
                      }}
                    >
                      <IconButton>
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/fb.svg')",
                            fontSize: 55,
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        objectFit: "fill",
                      }}
                    >
                      <IconButton>
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/google.svg')",
                            fontSize: 55,
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        objectFit: "fit",
                      }}
                    >
                      <IconButton>
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/apple.svg')",
                            fontSize: 55,
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <div
              className="createAcc"
              style={{
                position: "absolute",
                width: "77.5%",
                height: "3%",
                left: 40,
                top: 800,
                fontFamily: "Poppins",
                fontStyle: "Medium",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "165%",
                letterSpacing: -0.3,
              }}
            >
              <Typography
                style={{ color: "gray" }}
                variant="subtitle"
                display="block"
                gutterBottom
              >
                Don't have an account?{" "}
                <Link style={{ color: "black" }} href="/createAccount">
                  Create one
                </Link>
              </Typography>
            </div>
          </div>
        </>
      )) || <>//if desktop</>}
    </>
  );
};
export default SignIn;
