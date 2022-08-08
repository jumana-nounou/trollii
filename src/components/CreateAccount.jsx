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
  Link,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  Container,
  Icon,
} from "@mui/material";
import React from "react";
import { CheckBoxFill } from "akar-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [createAccount, setcreateAccount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {(isMD && (
        <>
          {createAccount === 0 && (
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

              <div className="createAcctitle">
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
                  Create new account
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

                    <div className="confirmpassword">
                      <Typography
                        style={{
                          color: "gray",
                          position: "absolute",
                          top: 387,
                          left: 16,
                          width: "73.3%",
                          height: "3.375%",
                          margin: 0,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: 18,
                          textAlign: "left",
                          verticalAlign: "top",
                          lineHeight: "160%",
                          letterSpacing: -0.3,
                        }}
                      >
                        Confirm password
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
                          top: 422,
                          margin: 0,
                        }}
                        {...register("confirmpassword", { required: true })}
                      />
                    </div>
                    <div className="rememberMe">
                      <FormControlLabel
                        control={<CheckBoxFill size={36} color={"#1F90D0"} />}
                        style={{
                          left: 22,
                          position: "absolute",
                          height: "4%",
                          top: 494,
                          width: "45.11%",
                        }}
                        label={
                          <Typography
                            style={{
                              borderRadius: 8,
                              fontFamily: "'Poppins', sans-serif",
                              fontStyle: "normal",
                              fontSize: 16,
                              letterSpacing: -0.3,
                              lineHeight: "100%",
                              width: "100%",
                            }}
                          >
                            &nbsp; remember me
                          </Typography>
                        }
                      />
                    </div>

                    <div className="createbtn">
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          margin: 0,
                          top: 542,
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
                        onClick={() => {
                          setcreateAccount(1);
                        }}
                      >
                        Create account
                      </Button>
                    </div>
                  </form>

                  <div className="or">
                    <Typography
                      style={{
                        color: "black",
                        bottom: 154,
                        top: 622,
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
                </Container>
                <div className="createAccwith3rdparty">
                  <Grid
                    container
                    spacing={0.5}
                    columnSpacing={-1}
                    style={{
                      width: "66.67%",
                      height: "6%",
                      position: "absolute",
                      left: 59,
                      right: 61,
                      bottom: 82,
                      top: 670,
                    }}
                  >
                    <Grid
                      item
                      xs={4}
                      md={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton
                        onClick={() =>
                          window.open("https://www.google.com", "_blank")
                        }
                      >
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/fb.svg')",
                            fontSize: 70,
                            borderRadius: 8,
                            boxSizing: "border-box",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      md={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton
                        onClick={() =>
                          window.open("https://www.google.com", "_blank")
                        }
                      >
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/google.svg')",
                            fontSize: 70,
                            borderRadius: 8,
                            boxSizing: "border-box",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      md={4}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton
                        onClick={() =>
                          window.open("https://www.google.com", "_blank")
                        }
                      >
                        <Icon
                          style={{
                            backgroundImage: "url('./icons/apple.svg')",
                            fontSize: 70,
                            borderRadius: 8,
                            boxSizing: "border-box",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></Icon>
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div
                className="createAcc"
                style={{
                  position: "absolute",
                  width: "77.5%",
                  height: "3%",
                  top: 746,
                  bottom: 30,
                  left: 40,
                  right: 41,
                }}
              >
                <Typography
                  style={{
                    color: "#888888",
                    fontFamily: "Poppins",
                    fontStyle: "Medium",
                    fontWeight: 400,
                    fontSize: 16,
                    letterSpacing: -0.3,
                    bottom: 37,
                  }}
                  variant="subtitle"
                  display="block"
                  gutterBottom
                >
                  Already have an account?{"  "}
                  &nbsp;
                  <Link
                    style={{
                      color: "black",
                      fontFamily: "Poppins",
                      fontStyle: "Medium",
                      fontWeight: 400,
                      fontSize: 16,
                      letterSpacing: -0.3,
                      textDecorationLine: "none",
                      textAlign: "right",
                    }}
                    href="/signIn"
                  >
                    Sign in
                  </Link>
                </Typography>
              </div>
            </div>
          )}
          {createAccount === 1 && (
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

              <div className="completeProfile">
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
                  Complete your profile
                </Typography>
              </div>

              <div className="container">
                <Container>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                      margin: 0,
                      width: "91.11%",
                      height: "63.875%",
                      top: 173,
                      bottom: 116,
                    }}
                  >
                    <div className="fullname">
                      <Typography
                        style={{
                          color: "gray",
                          position: "absolute",
                          top: 173,
                          left: 16,
                          width: "33.3%",
                          height: "3.375%",
                          margin: 0,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: 18,
                          textTransform: "none",
                          textAlign: "left",
                          verticalAlign: "top",
                          lineHeight: "170%",
                        }}
                      >
                        Full Name
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
                        {...register("fullname", { required: true })}
                      />
                    </div>
                    <br />

                    <div className="gender">
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
                          lineHeight: "170%",
                        }}
                      >
                        Gender
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
                        {...register("gender", { required: true })}
                      />
                    </div>
                    <br />
                    <div className="dateOfBirth">
                      <Typography
                        style={{
                          color: "gray",
                          position: "absolute",
                          top: 387,
                          left: 16,
                          width: "73.3%",
                          height: "3.375%",
                          margin: 0,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: 18,
                          textAlign: "left",
                          verticalAlign: "top",
                          lineHeight: "170%",
                          letterSpacing: -0.3,
                        }}
                      >
                        Date of Birth
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
                          top: 422,
                          margin: 0,
                        }}
                        {...register("confirmpassword", { required: true })}
                      />
                    </div>
                    <br />
                    <div className="phoneNumber">
                      <Typography
                        style={{
                          color: "gray",
                          position: "absolute",
                          top: 494,
                          left: 16,
                          width: "43.3%",
                          height: "3.375%",
                          margin: 0,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: 18,
                          textTransform: "none",
                          textAlign: "left",
                          verticalAlign: "top",
                          lineHeight: "170%",
                        }}
                      >
                        Phone number
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
                          top: 529,
                          margin: 0,
                        }}
                        {...register("phonenumber", { required: true })}
                      />
                    </div>
                    <br />
                    <div className="timezone">
                      <Typography
                        style={{
                          color: "gray",
                          position: "absolute",
                          top: 601,
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
                          lineHeight: "170%",
                        }}
                      >
                        Timezone
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
                          top: 636,
                          margin: 0,
                        }}
                        {...register("timezone", { required: true })}
                      />
                    </div>

                    <div className="confirmbtn">
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          margin: 0,
                          top: 716,
                          right: 16,
                          bottom: 36,
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
                        Confirm
                      </Button>
                    </div>
                  </form>
                </Container>
              </div>
            </div>
          )}
        </>
      )) || <>//if desktop</>}
    </>
  );
};
export default CreateAccount;
