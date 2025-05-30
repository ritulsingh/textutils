import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TextEncoder from './components/TextEncoder';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" />
        <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="/encoder" element={<TextEncoder />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
