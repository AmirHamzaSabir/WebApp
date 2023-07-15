import Home from "./pages/Home";
import Header from "./layouts";
import Footer from "./components/Footer";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import PageTerms from "./pages/PageTerms";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page-terms" element={<PageTerms />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
