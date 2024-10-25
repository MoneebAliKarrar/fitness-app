import Navbar from "@/scenes/Navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from '@/scenes/home'
import Benefits from "./scenes/Benefits";


function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
const [isTopOfPage, setIsTopOfPage] = useState(true);
useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }else{  
        setIsTopOfPage(false)
      }
    
  }
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll",handleScroll)
},[])


  return (
    <div className="app bg-gray-20" >
     <Navbar
     isTopOfPage = {isTopOfPage}
     selectedPage={selectedPage} setSelectedPage={setSelectedPage}>
     </Navbar>
     <Home setSelectedPage={setSelectedPage}></Home>
     <Benefits setSelectedPage={setSelectedPage}></Benefits>
    </div>
  )
}

export default App
