 export const  Nav = ({links})=>{
    return  (<nav>
    <ul>
        {links.map((a,i)=><li key={i}>{a}</li>)}
    </ul>
</nav>)
}