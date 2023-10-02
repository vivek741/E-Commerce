import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="./Checkout ">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/">
            <Header />
            <Home /> {/*Home route should come at the end of all roures */}
          </Route>  

        </Switch>
      </Router>

      <Header />
      <Home />
    </div>
  );
}

export default App;
