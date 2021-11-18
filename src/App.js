import "./main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="web-container">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
