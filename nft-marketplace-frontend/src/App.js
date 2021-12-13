import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MPNavbar from './components/MPNavbar'
import MPFooter from './components/MPFooter'
import MarketPlaceMain from './components/MarketPlaceMain'
import BackOfficeMain from './components/BackOfficeMain'
import ProductForm from './components/ProductForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MPNavbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<MarketPlaceMain />} />
            <Route path="/backoffice" element={<BackOfficeMain />} />
            <Route path="/product-form/:productId" element={<ProductForm />} />
          </Routes>
        </div>
        <MPFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;