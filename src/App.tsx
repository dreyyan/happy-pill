import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
