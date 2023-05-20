import "./Headercss.css"
import {Nav} from "./Nav";
import{GiIsland} from "react-icons/gi"
// GiIsland


export const Header = ()=>{
    const links = ["activities","cities","culture"]
    return (<header className="header">
        <div className="header-wrap">
            <div><GiIsland size={40} color={"blue"}></GiIsland></div>
          <Nav links={links} />
          </div>
          <div className="logo"></div>
    </header>)
}