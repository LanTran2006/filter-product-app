
import "./App.css";

import { Routes,Route} from "react-router-dom";
import Filter from "./components/Filter";
import Main from './components/Main'
import Sidebar from "./components/Sidebar";
import Product from "./pages/product";
function App() {
 
  return (
    <div className="container">
    
     <Filter/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      <Sidebar/>
    </div>
  );
}

export default App;
