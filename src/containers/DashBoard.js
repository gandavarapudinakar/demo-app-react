import React ,{Component} from 'react';
import Users from '../components/Users';
import Axios from "axios";
import './DashBoard.css';

class DashBoard extends Component {
  constructor(props){
      super(props)
      this.state={
          users: []

      }
  }
    componentDidMount() {
        Axios.get('http://localhost:8080/users',).then((res)=>{
            this.setState({
                users:res.data,
            })
        }).catch((e)=>{
            console.log("some thing wrong", e);
        })
    }

    render() {
        const users=this.state.users?<Users  users={this.state.users} history={this.props.history}></Users>:<h3>Loading...</h3>
        const name=this.props.userDetails?this.props.userDetails.state.user.name:"User";
        return(
            <div className="container">
                    <header>
                        <nav>
                            <h2>Welcome {name}</h2>
                        </nav>
                    </header>
                   <div className={"users"}>
                       {users}
                   </div>
            </div>
        )
    }


}
export default DashBoard;