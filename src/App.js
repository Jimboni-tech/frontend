import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header.js';
import CreateProduct from "./Pages/CreateProduct.js";
import Home from "./Pages/Home.js"; // You'll need to create this

function App() {
  return (
    
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateProduct />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;