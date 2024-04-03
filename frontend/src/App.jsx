
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import ProductDetailsPage from './ProductDetailsPage';
import './App.css'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
