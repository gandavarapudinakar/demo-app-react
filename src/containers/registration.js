import React, {Component} from "react";
import Axios from 'axios';
import FormRow from '../components/FormRow'
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
       Axios.post('http://localhost:8080/register',{...this.state,name:this.state.username}).then((res)=>{
           console.log(res,event);
       }).catch((e)=>{
           console.log("some thing wrong", e);
       })
   }

    render(){
        return (


            <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                <fieldset >
                    <FormRow type="username" label={"UserName:"} value={this.state.username}  onChangeHandler={(e)=>{this.setState({username:e.target.value})}}></FormRow>
                    <FormRow type="email" label={"Email:"} value={this.state.email}  onChangeHandler={(e)=>{this.setState({email:e.target.value})}}></FormRow>
                    <FormRow type="number" label={"Mobile:"} value={this.state.mobile}  onChangeHandler={(e)=>{this.setState({mobile:e.target.value})}}></FormRow>
                    <FormRow type="password" label={"Password:"} value={this.state.password}  onChangeHandler={(e)=>{this.setState({password:e.target.value})}}></FormRow>
                    <input type="submit" value={"submit"} />


                </fieldset>
            </form>

        );

    }
}
export default Registration;