import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Content />
    </Router>
  );
};

export default App;
