
import {useContext} from "react" 
import "./Headercss.css"
import {SeachBox} from "./SeachUi";
import{GiIsland} from "react-icons/gi"
import {HeaderSeach} from "./smallViewheaderSeach";
import useBrowserSize from "../utilhooks/windowWidthhook";
import windowContext from "../Context";
import{UserUiSetting} from "./SettingUi";




export const Header = ()=>{
  const smallViewSize = useContext(windowContext)
  
    const currentWith = useBrowserSize();

    return (<header className="header">
       { currentWith >= smallViewSize?
        <div className="header-wrap">
          <div><GiIsland size={40} color={"rgb(13, 84, 164)"}></GiIsland></div>
          <SeachBox  />
          <UserUiSetting /> 
          </div>: <HeaderSeach />}

    </header>)
}