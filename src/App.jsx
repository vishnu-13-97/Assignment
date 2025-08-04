
import Design from "./components/Design"
import { Development } from "./components/Development"
import Navbar from "./components/Navbar"
import {  Route, Routes } from "react-router-dom"


function App() {
 

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
      </Routes>
 

   </>
  )
}

export default App
