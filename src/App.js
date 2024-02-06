import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Upadate from "./components/Upadate"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact  path='/' element = {<Create/>} />
      <Route path='/read' element = {<Read/>} />
      <Route path='/update/:id' element = {<Upadate/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
