import React from "react"
const Button=(props)=>{

    return <>
  <button type="button" onClick={()=>props.onClick(props.label)} className="btn btn-primary btn-sm mr-4 align-items-center justify-content-center ">{props.label}</button>

    </>
}
export default Button