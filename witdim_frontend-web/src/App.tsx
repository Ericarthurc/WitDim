import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Content from "./containers/Content/Content";

const App = () => {
  return (
    <Router>
      {/* Placeholder logo LoL */}
      <h1 style={{ textAlign: "center" }}>WitDim</h1>
      <Content />
    </Router>
  );
};

export default App;
