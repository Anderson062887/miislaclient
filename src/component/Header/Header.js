
import {useContext} from "react" 
import "./Headercss.css"
import {SeachBox} from "./SeachUi";
import{GiIsland} from "react-icons/gi"
import {IoMenuOutline} from "react-icons/io5"
import {HeaderSeach} from "./smallViewheaderSeach";
import useBrowserSize from "../utilhooks/windowWidthhook";
import{BiUserCircle} from "react-icons/bi";
import windowContext from "../Context";


const UserUi =()=>{

  return(
    <div className="user-ui">
      <IoMenuOutline size={27} />
      <BiUserCircle size={27} color={"rgb(13, 84, 164)"}/>
    </div>)
}


export const Header = ()=>{
  const smallViewSize = useContext(windowContext)
  
    const currentWith = useBrowserSize();
    const links = ["actividades","ciudades","cultura"]
    return (<header className="header">
       { currentWith >= smallViewSize?
        <div className="header-wrap">
          <div><GiIsland size={40} color={"rgb(13, 84, 164)"}></GiIsland></div>
          <SeachBox  />
          <UserUi /> 
          
          
          </div>: <HeaderSeach />}
          {/* <div className="logo"></div> */}
    </header>)
}