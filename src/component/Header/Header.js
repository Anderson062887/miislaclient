
import "./Headercss.css"
import {Nav} from "./Nav";
import{GiIsland} from "react-icons/gi"
import { useEffect, useState } from "react";
import {HeaderSeach} from "./headerSeach";
// GiIsland
const useBrowserSize = ()=>{
    const [currentWith,setWith] = useState(()=>window.innerWidth);

    useEffect(()=>{
      window.addEventListener("resize",()=>setWith(window.innerWidth))
        return console.log("remove listener")|| window.removeEventListener("resize",setWith(window.innerWidth))
    },[])
   
    return currentWith;
}


export const Header = ()=>{
    const currentWith = useBrowserSize()
    const links = ["actividades","ciudades","cultura"]
    return (<header className="header">
       { currentWith >= 750?
        <div className="header-wrap">
            <div><GiIsland size={40} color={"blue"}></GiIsland></div>
          <Nav links={links} />
          </div>: <HeaderSeach />}
          {/* <div className="logo"></div> */}
    </header>)
}