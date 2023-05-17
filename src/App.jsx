
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <div className='lg:mx-10 px-4 py-5'>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer> 
    </div>
  )
}

export default App
