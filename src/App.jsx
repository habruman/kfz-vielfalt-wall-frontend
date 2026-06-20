import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./comp/Header";
import Home from "./pages/Home";
import VielfaltWall from "./pages/VielfaltWall";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vielfalt-wall" element={<VielfaltWall />} />
      </Routes>
    </Router>
  );
}

export default App;
