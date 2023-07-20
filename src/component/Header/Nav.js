import{AiOutlineSearch} from "react-icons/ai"



 //RxMagnifyingGlass
 export const  Nav = ({links})=>{
    return  (<nav>
    {/* <ul>
     {links.map((a,i)=><li key={i}>{a}</li>)}
    </ul> */}
    <div className="seach-wrapper">
        <input type="text" placeholder="buscar"/>
    
    <span className="nav-seach-icon"><AiOutlineSearch size={22} color={"white"}/></span>
    </div>
   
</nav>)
}