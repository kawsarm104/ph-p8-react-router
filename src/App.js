
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Users from './components/API/jsonPlaceHolder/users/Users';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navigation from "./components/navbar/Navigation";
// import Users from './components/API/jsonPlaceHolder/users/Users'

function App() {
  return (
    <div className="App">

      <Navigation />
      {/* <Users><Users/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/users/:id">
            <Users></Users>
          </Route>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
