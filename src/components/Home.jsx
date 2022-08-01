import { useState, useEffect } from "react";
import Img2 from "./Img2.svg";
import Img3 from "./Img3.svg";
import Img4 from "./Img4.svg";

import {
  Card,
  Grid,
  IconButton,
  Button,
  Modal,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//import AddBoxIcon from "@mui/icons-material/AddBox";
//import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
  
    const isMD = useMediaQuery(theme.breakpoints.down("md"));
    const [onBoarding1,setonBoarding1]=useState(true);
    const [showBoarding,setShowBoarding]=useState(false);
    const [onBoarding2,setonBoarding2]=useState(false);
    const [onBoarding3,setonBoarding3]=useState(false);
    const [onBoarding4,setonBoarding4]=useState(false);
    const [skipbtn,setSkipbtn]=useState(false);



  const containerStyle={
    position: "absolute",
    width: "532px",
    height: "800px",
    left: "172px",
    top: "0px",
    backgroundRepeat: 'no-repeat'
        };

  const onBoarding1Style={
    position: "absolute",
    width: "532px",
    height: "800px",
    left: "172px",
    top: "0px",
    backgroundRepeat: 'no-repeat',
    backgroundImage:"url('https://www.restaurang-hotell.se/wp-content/uploads/2022/07/toni-osmundson-XHBCqZGZre0-unsplash-scaled.jpg')",
    };
    
   const onBinfo={
    position:"absolute",
    width: "327px",
    height: "128px",
    left: "16px",
    top: "560px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    };

   const startBtn={
    position: "absolute",
    width: "328px",
    height: "48px",
    left: "16px",
    top: "720px",
    backgroundColor:"12A3A5",
    color:"white",
    filter: "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))"
    };

   const skipBtn={
    position: "absolute",
    width: "31px",
    height: "24px",
    left: "313px",
    top: "62px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    backgroundColor:"707070"
   };

   const img2={
    position: "absolute",
    width: "340px",
    height: "340px",
    left: "10px",
    top: "135px"
   };
   
   const onBinfo2={
    position: "absolute",
    width: "330px",
    height: "116px",
    left: "15px",
    top: "526px"
   }
   
   const img3={
    position: "absolute",
    width: "340px",
    height: "340px",
    left: "10px",
    top: "135px"
   };
   
   const onBinfo3={
    position: "absolute",
    width: "330px",
    height: "116px",
    left: "15px",
    top: "526px"
   }
   
   const img4={
    position: "absolute",
    width: "340px",
    height: "340px",
    left: "10px",
    top: "135px"
   };
   
   const onBinfo4={
    position: "absolute",
    width: "330px",
    height: "116px",
    left: "15px",
    top: "526px"
   }
   const nextbtn={
    position: "absolute",
    width: "328px",
    height: "48px",
    left: "16px",
    top: "720px",
    backgroundColor:"12A3A5",
    color:"white",
    filter: "drop-shadow(0px 4px 8px rgba(103, 103, 103, 0.25))"

   }


   const HandleTransition1=async()=>{
    setonBoarding1(false);
    setShowBoarding(true);
    setonBoarding2(true);
    setSkipbtn(true);
    
   };


    const HandleTransition=async()=>{
      if (onBoarding2 && !onBoarding3 && !onBoarding4){
        setonBoarding2(false);
        setonBoarding3(true);
        
        }
    else if(onBoarding3 && !onBoarding2 && !onBoarding4){
        setonBoarding3(false); 
        setonBoarding4(true);
        }
    };
  
    return (
    <>
    
    <div className="container" style={containerStyle}>
        {onBoarding1 &&
            <div className="onBoarding1" style={onBoarding1Style}>
                <div class="info" style={onBinfo}>
                  <h1 style={{color:"white"}}>Up for a travel?</h1>
                  <h4 style={{color:"white"}}>Use Trollii to search for the cheapest hotel
                   deal for all major destinations around the world. </h4> 
                </div>
                <Button
                 style={startBtn}
                 variant="contained"
                 onClick={HandleTransition1}>
                 Get Started
                </Button>
            </div>
         }
         {showBoarding && 
         <div className="onBoarding">
            <div className="skip" style={skipBtn}>   
                 <Button
                 variant="text"
                 onClick={() => navigate("/signIn")}>
                 skip
                 </Button>
                </div>
        
        {onBoarding2 &&
            <div className="onBoarding2">
             <div className="img2" style={img2}>
                <Img2/>             
                </div>
            
            <div className="onB2" style={onBinfo2}>
                <h2 style={{color:"black"}}>Customize your reservation</h2>
                <h4 style={{color:"black"}}>Choose the hotel area, your check in, check out
                and even how many rooms you want! </h4> 
                </div>
                </div>
                }
            
            { onBoarding3 && 
              <div className="onBoarding3">
                 <div className="img3" style={img3}>
                 <Img3/>

                </div>
                <div class="onB3" style={onBinfo3}>
                  <h2 style={{color:"black"}}>Book your desired hotel</h2>
                  <h4 style={{color:"black"}}>Look for reviews, facilities, price and more details 
                  about the hotel</h4> 
                </div>
                </div>
             }
              { onBoarding4 && 
              <div className="onBoarding4">
                 <div className="img4" style={img4}>
                 <Img4 />

                </div>
                <div class="info4" style={onBinfo4}>
                  <h2 style={{color:"black"}}>Congratulations!</h2>
                  <h4 style={{color:"black"}}>Have fun searching and finding the most suitable hotel
                  for yourself</h4> 
                </div>
                </div>
             }
               <div>
                <Button
                 style={nextbtn}
                 variant="contained"
                 onClick={HandleTransition}>
                Next
                </Button>
                </div>
            
             </div>
             }
        </div>
        
    </> 
          );
  };
  export default Home;



