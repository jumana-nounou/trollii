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
  Visibility,
  VisibilityOff,
  InputAdornment
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
         <div className="container">
      <h1 style={{color:"black"}}>Sign in to your account</h1>
    
      <TextField id="outlined-basic" label="Email" variant="outlined"/>
      <br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br/><br/>


      </div> 
            
          
          
        </>
      )) || <>//if desktop</>}

      </>
    );

};
export default SignIn;
