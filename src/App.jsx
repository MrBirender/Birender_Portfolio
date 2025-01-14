import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "./pages/index.js";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Theme/>
      <Routes>
        <Route path="/" element={<Home />} /> //try writing index instead of path="/
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
