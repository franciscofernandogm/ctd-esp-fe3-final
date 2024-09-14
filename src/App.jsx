
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dentist/:id' element={<Detail/>}></Route>
        <Route path='/fav' element={<Favs/>}></Route>
      </Routes>
      </>
  );
}

export default App;
