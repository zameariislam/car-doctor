
import './App.css';
import Footer from './Shared/Footer/Footer';
import { Routes, Route} from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';




function App() {
  return (
    <div >
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/service/:serviceId' element={<ServiceDetails/>}>

        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route   path='/login' element={<Login/>} />
        
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>

      
     
    
    </div>
  );
}

export default App;
