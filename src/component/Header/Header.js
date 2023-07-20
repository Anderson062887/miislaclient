
import "./Headercss.css"
import {Nav} from "./Nav";
import{GiIsland} from "react-icons/gi"
import {IoMenuOutline} from "react-icons/io5"
import {HeaderSeach} from "./smallViewheaderSeach";
import useBrowserSize from "../utilhooks/windowWidthhook";
import{BiUserCircle} from "react-icons/bi"

const UserUi =()=>{

  return(
    <div className="user-ui">
      <IoMenuOutline size={27} />
      <BiUserCircle size={27} color={"rgb(13, 84, 164)"}/>
    </div>)
}


export const Header = ()=>{
    const currentWith = useBrowserSize()
    const links = ["actividades","ciudades","cultura"]
    return (<header className="header">
       { currentWith >= 750?
        <div className="header-wrap">
          <div><GiIsland size={40} color={"blue"}></GiIsland></div>
          <Nav links={links} />
          <UserUi /> 
          
          
          </div>: <HeaderSeach />}
          {/* <div className="logo"></div> */}
    </header>)
}