import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <div className="Notifications"> style={{ border: "1px dashed red", padding: "10px", position: "relative" }}
    <button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="close icon" />
      </button>

      <p>Here is the list of notifications</p>
    
    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority="urgent">New resume available</li>
      <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
    </ul>
    </div>
  );
}

export default Notifications;