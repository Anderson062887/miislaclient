
import "./Headercss.css"
import {Nav} from "./Nav";
import{GiIsland} from "react-icons/gi"
import {HeaderSeach} from "./headerSeach";
import useBrowserSize from "../utilhooks/windowWidthhook";




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