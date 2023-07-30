import { useState} from "react";



 const useActiveOnClick =()=>{
    const [isclick,dispatch] = useState(false);
    const handleClick = ()=>dispatch((state)=> !state);
    return [isclick,handleClick];
}
export default  useActiveOnClick;