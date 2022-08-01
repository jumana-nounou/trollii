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
} from "@mui/material";
//import AddBoxIcon from "@mui/icons-material/AddBox";
//import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
  
    const isMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <>


      
      </>
    );

};
export default Home;
