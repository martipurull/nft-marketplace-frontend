import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MPNavbar from './components/MPNavbar'
import MPFooter from './components/MPFooter'
import MarketPlaceMain from './components/MarketPlaceMain';

function App() {
  return (
    <div className="App">
      <MPNavbar />
      <MarketPlaceMain />
      <MPFooter />
    </div>
  );
}

export default App;