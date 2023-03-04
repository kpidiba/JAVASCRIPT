import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import { Menu } from "./pages/Menu";
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>NAVBAR</div>
        <h3><Link to="/" >Home</Link></h3>
        <h3><Link to="/menu" >Menu</Link></h3>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
