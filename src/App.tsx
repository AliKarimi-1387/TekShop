import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mobiles from "./pages/Mobiles";
import MobileList from "./pages/MobileList";
import MobileTarget from "./pages/MobileTarget";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/mobiles/mobile/:brand" element={<MobileList />} />
        <Route
          path="/mobiles/mobile/target/:target"
          element={<MobileTarget />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
