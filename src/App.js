import './App.css';
import Categories from './Components/Categories/Categories';
import CategoryProductList from './Components/Categories/CategoryProductList';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/Products/ProductList';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/:categoryId" element={<CategoryProductList />} />
        </Routes>

      </Router>
    </>




  );
}

export default App;
