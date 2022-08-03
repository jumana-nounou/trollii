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
                 skip
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
    top:173
  }}>
  <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"91.11%",
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
          
          
      <TextField id="outlined-basic" label="Password" variant="outlined" 
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
          <Typography variant="h6" display="block" gutterBottom>
        or
      </Typography>
          </div>


  </div>
   


      </div> 
            
          
          
        </>
      )) || <>//if desktop</>}

      </>
    );

};
export default SignIn;