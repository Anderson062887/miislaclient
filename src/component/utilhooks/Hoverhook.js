import {useState} from "react"
const useHover =()=>{
  const [hovering,setHovering] = useState(false)

  const mousein = ()=>setHovering(true)
  const mouseout = ()=>setHovering(false)
    return[hovering,{onMouseOver:mousein,onMouseOut:mouseout}]
}
export default useHover;