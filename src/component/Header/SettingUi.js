import { ToolTip } from "../ToolTip";
// import useHover from "../utilhooks/Hoverhook";
import useActiveOnClick from "../utilhooks/clickActivehook";
import{BiUserCircle} from "react-icons/bi";
import {IoMenuOutline} from "react-icons/io5"



export const UserUiSetting =()=>{
    // const [hovering,hoverActions] = useHover();
    const [isclick,handleClick] = useActiveOnClick()
   
     return(
      //  <div className="user-ui" {...hoverActions} onClick={handleClick}>
         <div className="user-ui" onClick={handleClick}>
         <IoMenuOutline size={27} />
         <BiUserCircle size={27} color={"rgb(13, 84, 164)"}/>
           {isclick && <ToolTip links={["logout","profile","settings"]} />}
       </div>)
   }