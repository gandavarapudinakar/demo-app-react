import User from './User';
import React from 'react';
import {withRouter} from 'react-router-dom';
const users=(props)=>{
    return (props.users.map((user)=>{
        return <User className={"users"} key={user.id} user={user}/>
    }))

}
export default withRouter(users);