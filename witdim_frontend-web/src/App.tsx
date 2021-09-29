import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Utilbar from "./containers/Utilbar/Utilbar";
import HomeRoute from "./containers/HomeRoute/HomeRoute";
import AddRoute from "./containers/AddRoute/AddRoute";

const App = () => {
  return (
    <Router>
      <h1 style={{ textAlign: "center" }}>WitDim</h1>
      <Utilbar />
      <Switch>
        <Route path="/add">
          <AddRoute />
        </Route>
        <Route path="/">
          <HomeRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
