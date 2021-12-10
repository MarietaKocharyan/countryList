import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import  Hedaer from './components/header';
import ListOfCountries from './components/list';
import ListByLaungage from "./components/byLagunage";

function App() {
  return (
    <div className="App">
      <Hedaer /> 
        <Router>
          <Switch>
          <Route exact path="/">
          <ListOfCountries />
            </Route>
          <Route exact path="/country/:lang">
          <ListByLaungage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
