import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact"
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header toggleDarkMode={toggleDarkMode}/>
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode}/>}/>
            <Route path="/about" element={<About darkMode={darkMode}/>}/>
            <Route path="/projects" element={<Projects darkMode={darkMode}/>}/>
            <Route path="/contact" element={<Contact darkMode={darkMode}/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
};