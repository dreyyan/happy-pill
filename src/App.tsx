import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes>
  );
}

export default App;