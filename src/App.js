import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Users from "./components/API/jsonPlaceHolder/users/Users";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navigation from "./components/navbar/Navigation";
import NotFound from "./components/notFound/NotFound";
import UserDetail from "./components/userDetail/UserDetail";


function App() {
  return (
    <div className="App">
      
      {/* <Users><Users/> */}
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/user/:userId">
            <UserDetail />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
