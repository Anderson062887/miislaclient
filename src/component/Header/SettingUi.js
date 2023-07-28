import { ToolTip } from "../ToolTip";
import useHover from "../utilhooks/Hoverhook";
import{BiUserCircle} from "react-icons/bi";
import {IoMenuOutline} from "react-icons/io5"



export const UserUiSetting =()=>{
    const [hovering,hoverActions] = useHover();
   
     return(
       <div className="user-ui" {...hoverActions}>
         <IoMenuOutline size={27} />
         <BiUserCircle size={27} color={"rgb(13, 84, 164)"}/>
           {hovering && <ToolTip links={["login","profile","settings"]} />}
       </div>)
   }