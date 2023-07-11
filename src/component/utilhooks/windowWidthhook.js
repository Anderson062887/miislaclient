import { useState,useEffect } from "react";
const useBrowserSize = ()=>{
    const [currentWidth,setWidth] = useState(()=>window.innerWidth);

    useEffect(()=>{
      window.addEventListener("resize",()=>setWidth(window.innerWidth))
        return console.log("remove listener")|| window.removeEventListener("resize",setWidth(window.innerWidth))
    },[])
   
    return currentWidth;
}
export default useBrowserSize;
