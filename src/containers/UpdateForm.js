import React, {Component} from "react";
import Axios from 'axios';
import FormRow from '../components/FormRow'
class UpdateForm extends Component{
    state={
        user: {
            id:"",
            name: "",
            email: "",
            mobile: "",
            password: ""
        },
        registered:false

    }
    componentDidMount() {
        Axios.get('http://localhost:8080/user/'+this.props.match.params.id,).then((res)=>{
            this.setState({
                user:res.data,
            })
        }).catch((e)=>{
            console.log("some thing wrong", e);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(this.state);
        Axios.put('http://localhost:8080/user',{...this.state.user,id:this.state.user.id}).then((res)=>{
            this.props.history.push('/dashboard');
        }).catch((e)=>{
            console.log("some thing wrong", e);
        })
    }

    render(){
        return (

            <div className="form">
                <h1>UpdateForm</h1>
                <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                    <fieldset >
                        <FormRow type="username" label={"UserName:"} value={this.state.user.name}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,name:e.target.value}})}}></FormRow>
                        <FormRow type="email" label={"Email:"} value={this.state.user.email}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,email:e.target.value}})}}></FormRow>
                        <FormRow type="text" label={"Mobile:"} value={this.state.user.mobile}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,mobile:e.target.value}})}}></FormRow>
                        <FormRow type="password" label={"Password:"} value={this.state.user.password}  onChangeHandler={(e)=>{this.setState({user:{...this.state.user,password:e.target.value}})}}></FormRow>
                        <input type="submit" value={"submit"} />


                    </fieldset>
                </form>
            </div>

        );

    }
}
export default UpdateForm;