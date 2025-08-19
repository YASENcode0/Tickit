import "./App.css";
import SideMnu from "./components/SideMnu/SideMnu";
import Main from "./components/Main/Main";
import Login from "./components/Sign/Login";
import SignUp from "./components/Sign/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useTodo from "./hooks/useTodo";
import { useEffect } from "react";

import { PopupProvider } from "./contexts/PopupContext";
import AddTodo from "./components/PopUps/AddTodo/AddTodo";
import { CategoryPopup } from "./contexts/CategoryPopupContext";
import AddType from "./components/PopUps/AddCategoryType/AddType";

function App() {
  // const init = useTodo();
  // useEffect(() => {
  //   console.log(init.getAll());
  // }, []);   ----> افحص هل هذه الطريقه صح ام لا , عمل متغير لتفعيل جلب المهام

  return (
    <CategoryPopup>
      <PopupProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route
                element={
                  <>
                    <SideMnu />
                    <Main />
                    <AddTodo />
                    <AddType />
                  </>
                }
                path="/"
              />
              <Route element={<Login />} path="login" />
              <Route element={<SignUp />} path="SignUp" />
            </Routes>
          </div>
        </Router>
      </PopupProvider>
    </CategoryPopup>
  );
}

export default App;
