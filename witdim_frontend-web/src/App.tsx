import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Placeholder Title LoL */}
      <h1 style={{ textAlign: "center" }}>WitDim</h1>
      <Search />
      <Content />
    </Router>
  );
};

export default App;
