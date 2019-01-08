import React, {Component} from "react";
import Axios from 'axios';
import FormRow from '../components/FormRow'
class Registration extends Component{
   state={
       user: {
           name: "",
           email: "",
           mobile: "",
           password: ""
       },
       registered:false

   }
   handleSubmit(event){
      event.preventDefault();
       //console.log(this.state);
       Axios.post('http://localhost:8080/register',{...this.state.user}).then((res)=>{
           this.props.history.push('/dashboard');
       }).catch((e)=>{
           console.log("some thing wrong", e);
       })
   }

    render(){
        return (

            <div className="form">
                <h1>Registration</h1>
            <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                <fieldset >
                    <FormRow type="username" label={"UserName:"} value={this.state.name}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,name:e.target.value}})}}></FormRow>
                    <FormRow type="email" label={"Email:"} value={this.state.email}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,email:e.target.value}})}}></FormRow>
                    <FormRow type="text" label={"Mobile:"} value={this.state.mobile}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,mobile:e.target.value}})}}></FormRow>
                    <FormRow type="password" label={"Password:"} value={this.state.password}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,password:e.target.value}})}}></FormRow>
                    <input type="submit" value={"submit"} />


                </fieldset>
            </form>
            </div>

        );

    }
}
export default Registration;