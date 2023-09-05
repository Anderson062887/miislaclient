import { useRef, useState,useEffect} from "react";




export const Loader = ({txt})=>{
  const [text,setText] = useState(txt);
  const handler = useRef();

  useEffect(()=>{
    handler.current = setInterval(()=>{
     setText((prev)=>{
        return prev === txt +"..."?txt:prev +".";
     })
    },500)

    return ()=> clearInterval(handler.current)
  },[])

  return(<h2>{text}</h2>)
}