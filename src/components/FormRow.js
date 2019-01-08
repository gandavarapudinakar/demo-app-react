import React from "react";
import  './FormRow.css';
const formrow=(props)=>{
    return (
        <div className="row">
            <div className="cell"><strong>{props.label}</strong></div>
            <div className="cell"><input type={props.type} value={props.value} onChange={props.onChangeHandler}/></div>
        </div>
    );
}
export default formrow;