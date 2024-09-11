import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Notifications /> "{/* Notifications component */}"
      <div className="App">
        <Header /> {/* Header component */}
        <Login /> {/* Login component */}
        <Footer /> {/* Footer component */}
      </div>
    </>
  );
}

export default App;