import "./App.css";
import Chart_1 from "./components/Chart_1";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
      
    </Router>
  );
}

export default App;
