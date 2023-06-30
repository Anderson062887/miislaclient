import{AiOutlineSearch} from "react-icons/ai"
import{CiSliderHorizontal} from "react-icons/ci"

//AiOutlineSearch
//HiOutlineAdjustmentsHorizontal
export const HeaderSeach = ()=>{
    return(
        <div className="header-seach-wrapper">
            <span className="header-seach-icon"><AiOutlineSearch size={22}/></span>
            <div> <h4>Anywhere</h4> <p>Any week - add guests</p></div>
            <span className="header-seach-slide"><CiSliderHorizontal size={22} color={"#111"}/></span>
        </div>
    )
}