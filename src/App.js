import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Layout from "./components/Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/mentions-legales"
            element={<MentionsLegales />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;