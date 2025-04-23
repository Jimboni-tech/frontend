import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header.js';
import CreateProduct from "./Pages/CreateProduct.js";
import Home from "./Pages/Home.js"; 

function App() {
  return (
    
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreateProduct />} />
         
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;