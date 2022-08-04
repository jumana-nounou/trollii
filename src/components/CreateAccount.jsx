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
  Container
} from "@mui/material";
import React from 'react';

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [createAccount, setcreateAccount] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    const isMD = useMediaQuery(theme.breakpoints.down("md"));
    return  (
      <>
      {(isMD && (
          <>
            {createAccount === 0 && (
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
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                 }}
                 variant="text"
                 onClick={() => navigate("/Homepage")}>
                 <Typography style={{color:"gray"}}>skip</Typography>
                 </Button>
            </div>


          <div style={{
          position: "absolute",
          width: "50.8%",
          height: "12%",
          left:16,
          top: 53,
          margin:0,
          fontFamily: 'Poppins',
            fontStyle: "Medium",
            fontWeight: 400,
            fontSize:19,
            lineHeight: "165%",
            letterSpacing: -0.3,
          }}>
          <h1 style={{
            
            color:"black"
            }}>
              Create new account</h1>
          </div>
     

  <div style={{
    position:"absolute",
    width:"91.11%",
    height:"74.125%",
    left:16,
    right:16,
    top:173,
    alignContent:"center",
    alignItems:"center",
  }}> 
  <Container>
  <div className="email"
  style={{
    position:"absolute",
    width:"100%",
    left:16,
    right:16,

  }}>
    <form onSubmit={handleSubmit(onSubmit)}>
  <Typography style={{color:"gray"}}>Email</Typography>

<TextField id="outlined-basic" variant="outlined" style={{width:"100%",
  height:"10.375%"}}
  {...register("email",{required:"required"})}></TextField>
  <div/>

<br/>
  <div className="password"
   style={{
    position:"absolute",
    width:"100%",
    left:1,
    right:16,
  
  }}>
          
    <Typography style={{color:"gray"}}>Password</Typography> 
      <TextField id="outlined-basic" variant="outlined" 
      {...register("password",{required:"required"})} style={{width:"100%",
    height:"10.375%"}}/>
    </div>
<br/>

    <div className="confirmPassword"style={{
    position:"absolute",
    width:"100%",
    left:1,
    right:16,
    top:210,
  }}>
     <Typography style={{color:"gray"}}>Confirm password</Typography> 
      <TextField id="outlined-basic" variant="outlined" 
      {...register("confirmpassword",{required:"required"})}style={{width:"100%",
    height:"10.375%"}}/>
    </div>

    <div className="rememberMe" style={{
    position:"absolute",
    width:"91.11%",
    height:"3%",
    top:294,
    
  }}>
   <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

</div>
<div style={{
       margin:0,
       top:342,
       width:"100%",
       height:"80%",
       position:"absolute",
       left:1,
       right:16

    }}>
<Button
                  variant="contained"
                  style={{
                    margin:0,
                    width:"100%",
                    height:"55%",
                    filter: "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))"
                  }}
                  onClick={() => {
                    setcreateAccount(1);
                  }}
                >
                  Create Account
                </Button>
</div>
<div className="or" style={{
          position: "absolute",
          width: "62.5%",
          height: "12%",
          left:171,
          top: 420,
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
    <div className="createwith3rdparty" 
    style=
    {{
    position:"absolute",
    top:522,
    left:30,
    right:20,
    margin:0,
    }}>
      
      <a href='#'><img src='icons/Facebook.png'style={{
        width:"30.7%",
        height:"100%",
        
      }} /></a>
  &nbsp;
      <a href='#'><img src='icons/google.png'style={{ 
        width:"30.7%",
        height:"100%",
      }} /></a>
    &nbsp;

      <a href='#'><img src='icons/apple.png'style={{
        width:"30.7%",
        height:"100%",
      }} /></a>
      </div>

      <div className="goTocreateAccount"style={{
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
 <Typography variant="subtitle" display="block" gutterBottom>
        Already have an account? <Link href="/signIn">sign In</Link>

      </Typography>
   </div>
      </form>
</div>
</Container>
  </div>
   
  
</div>
      
      
          
            )}
             {createAccount === 1 && (
              <div>
                
              </div>
         )}
         </>
       )) || <>//if desktop</>}
     </>
   );
};
export default CreateAccount;
