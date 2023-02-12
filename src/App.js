import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar title="Textutils" />
        <Routes>
          <Route exact path="/" element={<TextForm/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
