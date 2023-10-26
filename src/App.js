/* eslint-disable react/jsx-no-undef */

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from "./components/About";

import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  // const [mode1, setMode1]= useState('redish');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#15354e";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title='TextUtils Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enable", "warning");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter>
        <Navbar
          title="Diptanu"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Yours Thinking"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter> */}

      
        <Navbar
          title="Diptanu"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Yours Thinking"
                />
          
        </div>
    </>
  );
}

export default App;
