import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Product from "./pages/Product";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;