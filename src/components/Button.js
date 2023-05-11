import React from "react";
import '../Stylesheet/Button.css'

const Button = (props) => {

    const isOperator = (val) => {
        return isNaN(val) && (val !== '.') && (val !== '=')
    }


    return (
        <div className={`button-conteiner ${isOperator(props.children) ? 'operator' : null }` .trimEnd() }
        onClick={() => props.manageClick(props.children)}>
            {props.children}





        </div>


        
    )




}

export default Button