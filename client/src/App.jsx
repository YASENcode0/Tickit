import "./App.css";
import SideMnu from "./components/SideMnu/SideMnu";
import Main from "./components/Main/Main";
import Login from "./components/Sign/Login";
import SignUp from "./components/Sign/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            element={
              <>
                <SideMnu />
                <Main />
              </>
            }
            path="/"
          />
          <Route element={<Login/>} path="login" />
          <Route element={<SignUp/>} path="SignUp" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
