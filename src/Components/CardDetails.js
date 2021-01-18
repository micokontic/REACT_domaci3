import '../CardsDetails.css';
import {useLocation} from "react-router-dom";
import React, { Component } from 'react'
export default class CardDetails extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       post:{}
    }
  }
  
  
  getBlob(){ 
    /*ovdje bi stavio url tog koji ti treba*/
    fetch("https://jsonblob.com/api/jsonBlob/f8ae1c63-58bf-11eb-bd60-ebef1b632e8a") 
          .then(response=>{
         return response.json();
          })
    .then(response=>{
       var postId=window.location.pathname.substring(1);
     
      var post=response.filter((post)=>{
       
        if(post.id.toString()==postId){
          return post
        }
      })
     
      this.setState({post:post[0]})

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
      <div class="center">
      <div class="property-card">
        <a href="#">
    <div class="property-image" style={{backgroundImage:`url(${this.state.post.image_url})`}}>
      <div class="property-image-title">
        
      </div>
    </div></a>
  <div class="property-description">
    <h5>{this.state.post.title}</h5>
    <h6>{this.state.post.author}</h6>
    <p>{this.state.post.content}</p>
  </div>
  
</div>
</div>
  )
  }
}

