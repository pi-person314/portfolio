import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact"
import Gallery from "./screens/Gallery"

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/gallery" element={<Gallery />}/>
        </Routes>
      </Router>
    </div>
  );
};