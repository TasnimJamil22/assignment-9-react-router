import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Help from './Components/Help/Help';

function App() {
  return (
    <div className="App">
      
       <Header></Header>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service-details/:id' element={ <ServiceDetails></ServiceDetails>}></Route>
        <Route path='/help' element={ <Help></Help>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
