import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/meal/:mealId">
             <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
