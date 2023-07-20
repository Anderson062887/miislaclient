import{AiOutlineSearch} from "react-icons/ai"



 //RxMagnifyingGlass
 export const  SeachBox = ({links})=>{
    return  (
    <div className="seach-wrapper">
        <input type="text" placeholder="buscar"/>
    <span className="nav-seach-icon"><AiOutlineSearch size={22} color={"white"}/></span>
    </div>
   )
}