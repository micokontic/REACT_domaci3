import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Cards from './Components/Cards'
import CardDetails from './Components/CardDetails'
import AddPost from './Components/AddPost'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      posts:{}
    }
  }
  

  getBlob(){ 
    /*ovdje bi stavio url tog koji ti treba*/
    fetch("https://jsonblob.com/api/jsonBlob/f8ae1c63-58bf-11eb-bd60-ebef1b632e8a") 
          .then(response=>{
         return response.json();
          })
    .then(response=>{
          this.setState({
            posts:response
          })
    })
          .catch(function(error){
              console.log(error);
          });
  }

  componentDidMount(){
    this.getBlob()
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Switch>
          <Route exact path='/' render={(props) => <Cards {...props} posts={this.state.posts}/>}></Route>
          <Route exact path='/add-post' render={(props) => <AddPost {...props} posts={this.state.posts}></AddPost>}></Route>
          <Route path='/:id' render={(props) => <CardDetails></CardDetails>}></Route>
          </Switch>
        </Router>
      </div>
      
    )
  }
}



