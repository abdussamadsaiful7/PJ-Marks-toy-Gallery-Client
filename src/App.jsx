
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer> 
    </div>
  )
}

export default App
