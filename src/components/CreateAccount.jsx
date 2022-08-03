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
  TextField
} from "@mui/material";
//import AddBoxIcon from "@mui/icons-material/AddBox";
//import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [createAccount, setcreateAccount] = useState(0);

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
     

  <div> 
  <div className="email"
  style={{
    position:"absolute",
    width:"91.11%",
    height:"10.375%",
    left:16,
    top:173
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
    top:280,
    left:16,
  }}>
          
          <Typography style={{color:"gray"}}>Password</Typography> 
      <TextField id="outlined-basic" variant="outlined" 
      style={{width:"91.11%",
    height:"10.375%"}}/>
    </div>


    <div className="confirmPassword"style={{
    position:"absolute",
    width:"91.11%",
    height:"3%",
    top:387,
    left:16,
  }}>
     <Typography style={{color:"gray"}}>Confirm password</Typography> 
      <TextField id="outlined-basic" variant="outlined" 
      style={{width:"91.11%",
    height:"10.375%"}}/>
    </div>

    <div className="rememberMe" style={{
    position:"absolute",
    width:"91.11%",
    height:"3%",
    top:494,
    left:16,
  }}>
   <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

</div>
<div>
<Button
                  variant="contained"
                  style={{
                    margin:0,
                    top:542,
                    width:"91.11%",
                    height:"6%",
                    position:"absolute",
                    left:16,
                    filter: "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))"
                  }}
                  onClick={() => {
                    setcreateAccount(1);
                  }}
                >
                  Create Account
                </Button>
</div>

    <div className="createwith3rdparty" 
    style=
    {{
    position:"absolute",
    top:622,
    left:50,
    right:50,
    margin:0,
    width:"72.7%",
    height:"18%",
    alignItems:"center"
    }}>
       <Typography style={{textAlign:"center"
       }} variant="h6" display="block" gutterBottom>
        or
      </Typography>
      <div>
      <a href='#'><img src='icons/Facebook.png'style={{
        width:"20.7%",
        height:"50%",
        
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
        Don't have an account? <Link href="/register">Create one</Link>

      </Typography>
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
