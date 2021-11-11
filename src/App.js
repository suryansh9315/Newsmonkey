import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="general" pageSize={9} country="us" category="general" />
          </div>} />
          <Route exact path="/business" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="business" pageSize={9} country="us" category="business" />
          </div>} />
          <Route exact path="/science" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="science"pageSize={9} country="us" category="science" />
          </div>} />
          <Route exact path="/sports" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="sports" pageSize={9} country="us" category="sports" />
          </div>} />
          <Route exact path="/health" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="health" pageSize={9} country="us" category="health" />
          </div>} />
          <Route exact path="/technology" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="technology" pageSize={9} country="us" category="technology" />
          </div>} />
          <Route exact path="/entertainment" element={<div className=" container newssection" style={{ minHeight:"100vh",maxHeight: "222vh" }}>
            <News key="entertainment" pageSize={9} country="us" category="entertainment" />
          </div>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
