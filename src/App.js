import React, { Component } from 'react';
import './App.css';
import Registration from './containers/registration';
import DashBoard from './containers/DashBoard';
import {Route ,BrowserRouter} from 'react-router-dom';
import UpdateForm from './containers/UpdateForm';

class App extends Component {


  render() {
    return (
        <BrowserRouter>
      <div className="App">
        <Route path={'/'} exact  render={props => <Registration {...props} ref={(regDetials)=>{this.regDetials=regDetials}} />} />
          <Route path={'/dashboard'} exact render={props => <DashBoard {...props} userDetails={this.regDetials}/>}/>
        <Route path={'/dashboard/:id'} exact render={props => <UpdateForm {...props} />}  />
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
