
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import  { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer> 
    <Toaster />
    </div>
  )
}

export default App
