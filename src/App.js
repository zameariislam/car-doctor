
import './App.css';
import Footer from './Shared/Footer/Footer';
import { Routes, Route} from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div >
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails/>}>

        </Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>

      
     
    
    </div>
  );
}

export default App;
