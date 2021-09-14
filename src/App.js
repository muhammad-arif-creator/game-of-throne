import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/list";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <list />
      {
        <Router>
          <Switch>
            <Route exact path="/" component={List}></Route>
            <Route path="/user" component={Detail}></Route>
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
