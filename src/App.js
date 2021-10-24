import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
