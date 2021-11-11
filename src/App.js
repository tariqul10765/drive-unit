import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ExploreProducts from './pages/explore-products/ExploreProducts';
import Home from './pages/home/home/Home';
import Purchase from './pages/purchase/purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/purchase/:purchaseId'>
            <Purchase></Purchase>
          </Route>
          <Route path='/explore-products'>
            <ExploreProducts></ExploreProducts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
