import './App.css'
import { Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import ErrorPage from './components/404/ErrorPage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import HomePage from './components/Homepage/HomePage';
import Fertility from './OtherComponent/Fertility/Fertility'
import OtherComp from './OtherComponent/OtherComp'
import Market from './OtherComponent/Market/Market'
import Listing from './OtherComponent/Listing/Listing'


function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>

      {/* Login signin route */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

      <Route path='/all' element={<OtherComp/>}/>

      <Route path='/market' element={<Market/>}/>

      <Route path='//listing-form' element={<Listing/>}/>

      {/* Error page route */}
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
      <Footer/>      
    </>
  )
}

export default App
