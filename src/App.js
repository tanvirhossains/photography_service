import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Pages/Home/Footer/Footer';
import Header from './Components/Pages/Home/Header/Header';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Register from './Components/Pages/EntrancePages/Register/Register';
import Login from './Components/Pages/EntrancePages/Login/Login';
import Blogs from './Components/Pages/Blogs/Blogs';
import Services from './Components/Pages/Home/Services/Services';
import Notfound from './Components/Pages/NotFound/Notfound';
import ServiceDetail from './Components/Pages/Home/ServiceDetail/ServiceDetail';
import RequireAuth from './Components/Pages/EntrancePages/RequireAuth/RequireAuth';
import CheckOut from './Components/Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
     


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/serviceDetail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>


        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
