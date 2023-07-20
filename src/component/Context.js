import {createContext,useState} from "react";
 const windowContext = createContext();



export const Provider = ({children})=>{
     const [smallView] = useState(750);

    return (
        <>
          <windowContext.Provider value={smallView} >
           {children}
         </windowContext.Provider>
        </>

    )
}
export default windowContext;
