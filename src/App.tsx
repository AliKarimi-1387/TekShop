import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mobiles from "./pages/Mobiles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
