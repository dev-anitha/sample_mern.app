import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'
import AdminHome from './pages/AdminHome'
import {Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/hrhome" element={<hrhome></hrhome>}></Route>
      <Route path="/emphome" element={<emphome></emphome>}></Route>
      <Route path="/adminhome" element={<adminhome></adminhome>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
      <Route path="/Services" element={<Services></Services>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
