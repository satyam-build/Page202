import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;