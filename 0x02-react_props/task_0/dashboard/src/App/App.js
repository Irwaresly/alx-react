import React from "react";
import "./App.css";
import Login from "../Login/Login.js";
import Notification from "./Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Notification /> {/* Add Notification component */}
      <Header /> {/* Add Header component */}
      <Login /> {/* Add Login component */}
     <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default App;