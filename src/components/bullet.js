import React from "react"
import Tab from "./tab"

function Bullet(props) {

    return (
        <span>
            {props.a ? <div > <span className="bold"><br /> <Tab /> -  {props.a}</span> </div> : <span></span>}
            {props.b ? <div ><span className="bold"> <br /><Tab /> - {props.b}</span> </div> : <span></span>}
            {props.c ? <div ><span className="bold"> <br /><Tab /> -  {props.c}</span></div> : <span></span>}
            {props.d ? <div ><span className="bold"> <br /><Tab /> -  {props.d}</span></div> : <span></span>}
            {props.e ? <div ><span className="bold"> <br /><Tab /> -  {props.e}</span></div> : <span></span>}
        </span>
    )
}

export default Bullet;
