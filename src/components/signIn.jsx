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
//import AddBoxIcon from "@mui/icons-material/AddBox";
//import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();
    const theme = useTheme();
   // const [email,setEmail]=useState(false);
   // const [password,setPassword]=useState(false);
   // const [remember,setRemember]=useState(false);

    
    
    const isMD = useMediaQuery(theme.breakpoints.down("md"));




    return (
      <>
      <div className="container">
      <h1 style={{color:"black"}}>Sign in to your account</h1>
    
      <TextField id="outlined-basic" label="Email" variant="outlined"/>
      <br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br/><br/>


      </div>

      </>
    );

};
export default SignIn;
