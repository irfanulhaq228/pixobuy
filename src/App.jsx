import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[60px] sm:pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
