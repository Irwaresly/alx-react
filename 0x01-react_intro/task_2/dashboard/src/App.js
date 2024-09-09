import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {/* Email label and input */}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        {/* Password label and input */}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        {/* Submit button */}
        <button>OK</button>
      </div>
      <div className="App-footer"> Copyright {getFullYear()} - {getFooterCopy(false)}
    </div>
    </div>
  );
}

export default App;