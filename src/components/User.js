import React from 'react';
import './User.css';
import {withRouter} from "react-router-dom";
import Axios from "axios";
const user=(props)=>{
     return(
    <div className="user" onClick={()=>{props.history.push({pathname:props.match.url+"/"+String(props.user.id)})}}>
        <p><strong>Name:</strong>{props.user.name}</p>
        <p><strong>Email:</strong>{props.user.email}</p>
        <p><strong>Mobile:</strong>{props.user.mobile}</p>
        <button onClick={(e)=>{ if(window.confirm('are you sure to delete')){
            console.log('enter')
            Axios.delete('http://localhost:8080/user/'+props.user.id).then((res)=>{
                props.history.goBack();
            }).catch((e)=>{
                console.log("some thing wrong", e);
            })}else {
            e.stopPropagation();
        }
        }}>Delete</button>
    </div>
     )

}
export default withRouter(user);