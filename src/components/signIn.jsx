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
  Typography


} from "@mui/material";

import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    
    
    const isMD = useMediaQuery(theme.breakpoints.down("md"));
   
  


    return (
      <>
      {(isMD && (
        <>
         <div>
         <div className="skipBtn" style={{
                  position:"absolute",
                  width:"8.6%",
                  height:"6.67%",
                  top:64,
                  left:313,
               }}> 
               <Button
                 style={{
                  color:"707070",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                 }}
                 variant="text"
                 onClick={() => navigate("/Homepage")}>
                 <Typography style={{color:"gray"}}>skip</Typography>
                 </Button>
            </div>


          <div style={{
          position: "absolute",
          width: "62.5%",
          height: "12%",
          left:16,
          top: 53,
          fontFamily: 'Poppins',
            fontStyle: "Medium",
            fontWeight: 400,
            fontSize:20,
            lineHeight: "165%",
            letterSpacing: -0.3,
          }}>
          <h1 style={{
            color:"black"
            }}>
              Sign in to your account</h1>
          </div>
     

  <div> 
  <div className="email"
  style={{
    position:"absolute",
    width:"91.11%",
    height:"10.375%",
    left:16,
    top:173,
    margin:0
  }}>
    <Typography style={{color:"gray"}}>Email</Typography>
  <TextField id="outlined-basic" variant="outlined" style={{width:"91.11%",
    height:"10.375%"}}/>
  </div>
  <div className="password"
   style={{
    position:"absolute",
    width:"91.11%",
    height:"10.375%",
    top:300,
    left:16,
  }}>
          
      <Typography style={{color:"gray"}}>Password</Typography>
      <TextField id="outlined-basic" variant="outlined" 
      style={{width:"91.11%",
    height:"10.375%"}}/>
    </div>
<div style={{
    position:"absolute",
    width:"91.11%",
    height:"3%",
    top:387,
    left:16,
  }}>
   <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
   <Link href="#">Forgot Password</Link>

</div>
<div>
<Button
                  variant="contained"
                  style={{
                    margin:0,
                    top:435,
                    width:"91.11%",
                    height:"6%",
                    position:"absolute",
                    left:16,
                    filter: "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))"
                  }}
                  onClick={() => navigate("/Homepage")}
                >
                  Sign IN
                </Button>
</div>
<div style={{
          position: "absolute",
          width: "62.5%",
          height: "12%",
          left:171,
          top: 511,
          fontFamily: 'Poppins',
            fontStyle: "Medium",
            fontWeight: 400,
            fontSize:60,
            lineHeight: "165%",
            letterSpacing: -0.3,
          }}>
          <Typography style={{color:"gray"}} variant="h6" display="block" gutterBottom>
        or
      </Typography>
          </div>
    <div className="icons" 
    style=
    {{
    position:"absolute",
    top:563,
    left:55,
    right:55,
    }}>
      <a href='#'><img src='icons/Facebook.png'style={{
        width:"20.7%",
        height:"100%",
        
      }} /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='#'><img src='icons/google.png'style={{ width:"20.7%",
        height:"100%",
      }} /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <a href='#'><img src='icons/apple.png'style={{
        width:"20.7%",
        height:"100%",
      }} /></a>
</div>
  </div>
   <div style={{
          position: "absolute",
          width: "77.5%",
          height: "3%",
          left:40,
          top: 742,
          fontFamily: 'Poppins',
            fontStyle: "Medium",
            fontWeight: 400,
            fontSize:20,
            lineHeight: "165%",
            letterSpacing: -0.3,
          }}>
 <Typography style={{color:"gray"}}variant="subtitle" display="block" gutterBottom>
        Don't have an account? <Link style={{color:"black"}} href="/createAccount">Create one</Link>

      </Typography>
   </div>


      </div> 
            
          
          
        </>
      )) || <>//if desktop</>}

      </>
    );

};
export default SignIn;