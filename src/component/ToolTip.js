
export const ToolTip =({links})=>{
    return(
      <div className="tooltip">
        <ul>
        {links.map(link =><li key={link}>{link}</li>)}
        </ul>
      </div>
    )
  }