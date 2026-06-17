import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mobiles from "./pages/Mobiles";
import MobileList from "./pages/MobileList";
import MobileTarget from "./pages/MobileTarget";
import Laptop from "./pages/Laptop";
import LaptopList from "./pages/LaptopList";
import LaptopTarget from "./pages/LaptopTarget";
import Cart from "./pages/Cart";
import HeaderLayout from "./layout/HeaderLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/mobile/:brand" element={<MobileList />} />
          <Route
            path="/mobiles/mobile/target/:target"
            element={<MobileTarget />}
          />

          <Route path="/laptop" element={<Laptop />} />
          <Route path="/laptop/:brand" element={<LaptopList />} />
          <Route path="/laptop/target/:target" element={<LaptopTarget />} />
        </Route>

        <Route element={<HeaderLayout />}>
          <Route path="/shopcart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
