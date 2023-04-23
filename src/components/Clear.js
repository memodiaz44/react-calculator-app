import React from "react";
import "../Stylesheet/Clear.css"

const Clear = (props) => (

    <div
    
    className="clear-buttom" onClick={props.manageClick}>
        {props.children } 



    </div>




)

export default Clear