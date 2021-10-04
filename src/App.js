import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop/>
          </Route>
          <Route path='/shop'>
            <Shop/>
          </Route>
          <Route path='/orders'>
            <OrderReview/>
          </Route>
          <Route path='/inventory'>
            <Inventory/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
