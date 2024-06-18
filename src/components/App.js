import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Explore from './Explore';
import Menu from './Menu';

function App() {
  const [dotCount, setDotCount] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setDotCount((count)=>{return count===2?0:count+1})
    }, 3000)
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu dotCount={dotCount}/>}>
          <Route index element={<Home dotCount={dotCount} setDotCount={setDotCount}/>} />
          <Route path="explore" element={<Explore />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
