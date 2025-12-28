import './App.css'
import {Navbar,Footer} from "./components/indexComponents"
import { AllRoutes } from './Routes/AllRoutes'

function App() {

  return (
    <>
    <div className=' min-h-screen bg-slate-50'>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
    </>
  )
}

export default App
