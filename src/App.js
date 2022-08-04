import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signIn" exact element={<SignIn />} />
        <Route path="/createAccount" exact element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
