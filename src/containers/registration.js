import React, {Component} from "react";
import Axios from 'axios';
class Registration extends Component{
   state={
       username: "",
       email: "",
       mobile: "",
       password: ""

   }
   handleSubmit(event){
       event.preventDefault();
       console.log(this.state);
       Axios.post('http://localhost:8080/register',{...this.state}).then((res)=>{
           console.log(res,event);


       }).catch((e)=>{
           console.log("some thing wrong", e);
       })
   }

    render(){
        return (


            <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                <fieldset >
                <span><label htmlFor="username">UserName:</label><input name="username" type="username" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}}/></span><br/>
               <span><label htmlFor="email">Email:</label> <input name="email" type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/></span><br/>
                <span><label htmlFor="mobile">mobile:</label><input name="mobile" type="number" maxLength={10} value={this.state.mobile} onChange={(e)=>{this.setState({mobile:e.target.value})}}/></span><br/>
                <span><label htmlFor="password">Password:</label><input name="password" type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/></span><br/>
                <input type="submit" value={"Submit"}/>
                </fieldset>
            </form>

        );

    }
}
export default Registration;