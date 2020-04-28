import React from "react"
import Tab from "./tab"
function Bullet(props) {

    return (
        <span>
               {props.a ? <span className="bold"><br/> <Tab/> -  {props.a}</span> : <span></span>}
               {props.b ? <span className="bold"> <br/><Tab/> - {props.b}</span> : <span></span>}
               {props.c ? <span className="bold"> <br/><Tab/> -  {props.c}</span> : <span></span>}
               {props.d ? <span className="bold"> <br/><Tab/> -  {props.d}</span> : <span></span>}
               {props.e ? <span className="bold"> <br/><Tab/> -  {props.e}</span> : <span></span>}
        </span>
    )
}

export default Bullet;
