import logo from './logo.svg';
import './App.css';
import AddStudent from './components/Formofproducts';
import SearchStudent from './components/SearchProduct';
import Formofproducts from './components/Formofproducts';
import SearchProduct from './components/SearchProduct';
import Shoppingcartview from './components/Shoppingcartview';

function App() {
  return (
    <div>
      <Formofproducts />
      <SearchProduct />
      <Shoppingcartview />
    </div>
  );
}

export default App;
