import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/dashboard/dashboard/Dashboard';
import ExploreProducts from './pages/explore-products/ExploreProducts';
import Home from './pages/home/home/Home';
import Login from './pages/login/Login';
import Purchase from './pages/purchase/purchase/Purchase';
import Register from './pages/register/Register';
import Header from './pages/shared/header/Header';
import PrivateRoute from './private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/explore-products'>
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
