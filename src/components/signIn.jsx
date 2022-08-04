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
} from "@mui/material";
import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

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
            <div
              className="skipBtn"
              style={{
                position: "absolute",
                width: "8.6%",
                height: "6.67%",
                top: 64,
                left: 313,
              }}
            >
              <Button
                style={{
                  color: "707070",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
                variant="text"
                onClick={() => navigate("/Homepage")}
              >
                <Typography style={{ color: "gray" }}>skip</Typography>
              </Button>
            </div>

            <div
              style={{
                position: "absolute",
                width: "62.5%",
                height: "12%",
                left: 16,
                top: 53,
                fontFamily: "Poppins",
                fontStyle: "Medium",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "165%",
                letterSpacing: -0.3,
              }}
            >
              <h1
                style={{
                  color: "black",
                }}
              >
                Sign in to your account
              </h1>
            </div>

            <div
              style={{
                position: "absolute",
                height: "54.75%",
                top: 173,
                left: 16,
                right: 16,
                width: "91.11%",
              }}
            >
              <Container>
                <div
                  className="email"
                  style={{
                    margin: 0,
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography style={{ color: "gray" }}>Email</Typography>

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      style={{ width: "100%", height: "10.375%" }}
                      {...register("email", { required: true })}
                    />

                    <br />

                    <div
                      className="password"
                      style={{
                        margin: 0,
                      }}
                    >
                      <Typography style={{ color: "gray" }}>
                        Password
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", height: "10.375%" }}
                        {...register("password", { required: true })}
                      />
                    </div>

                    <div
                      className="forgotPass"
                      style={{
                        position: "absolute",
                        height: "3%",
                      }}
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remember Me"
                      />
                      <Link href="#">Forgot Password?</Link>
                    </div>

                    <div
                      style={{
                        margin: 0,
                        top: 240,
                        width: "91.11%",
                        height: "20%",
                        position: "absolute",
                        left: 16,
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          width: "100%",
                          height: "55%",
                          filter:
                            "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        Sign IN
                      </Button>
                    </div>
                  </form>

                  <div
                    className="or"
                    style={{
                      position: "absolute",
                      width: "62.5%",
                      height: "12%",
                      left: 171,
                      top: 320,
                      fontFamily: "Poppins",
                      fontStyle: "Medium",
                      fontWeight: 400,
                      fontSize: 60,
                      lineHeight: "165%",
                      letterSpacing: -0.3,
                    }}
                  >
                    <Typography
                      style={{ color: "gray" }}
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
                      top: 393,
                      left: 50,
                      right: 25,
                    }}
                  >
                    <a href="#">
                      <img
                        src="icons/Facebook.png"
                        style={{
                          width: "20.7%",
                          height: "100%",
                        }}
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">
                      <img
                        src="icons/google.png"
                        style={{ width: "20.7%", height: "100%" }}
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">
                      <img
                        src="icons/apple.png"
                        style={{
                          width: "20.7%",
                          height: "100%",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </Container>
            </div>
            <div
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
