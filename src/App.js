import logo from './logo.svg';
import './App.css';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/signIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signIn" exact element={<SignIn />} />
        {/* <Route path="/all" exact element={<All />} /> */}
      </Routes>
    </>
  );
}



export default App;
