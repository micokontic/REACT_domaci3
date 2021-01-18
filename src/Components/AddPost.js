import '../addPost.css'
import React, { Component } from 'react'

export default class addPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             imgUrl:'',
             author:'',
             post:''
        }
    }

    putBlob=(newPosts)=>{ 
        let url = "https://jsonblob.com/api/jsonBlob/f8ae1c63-58bf-11eb-bd60-ebef1b632e8a";
        fetch(url,{
      
              method: 'PUT',
      
              headers: {
      
                  'Content-Type': 'application/json'
      
              },
      
              body: JSON.stringify(newPosts)
      
          })
          .then((response) => response.json())
          .then((data) => {
              window.location.href='/'
          })
          .catch((error) => console.log(error))
      }

      addNewPost=()=>{
        console.log(this.props.posts);
        if(this.props.posts.length>0){
            var newId=this.props.posts[this.props.posts.length-1].id+1;
        }else{
            var newId=1;
        }
        console.log(newId);
        var newPosts=[...this.props.posts, {
            "id": newId,
            "title": this.state.title,
            "image_url": this.state.imgUrl,
            "author": this.state.author,
            "content": this.state.post
          }]
        this.putBlob(newPosts)
      }
    
    render() {
        
        return (
            <div className="login-box">
            <h4>ADD POST</h4>
            <form>
                <div className="user-box">
                <input type="text" name="" required="" max='20' onChange={(e)=>{this.setState({title:e.target.value})}}></input>
                <label>Title</label>
                </div>
                <div className="user-box">
                <input type="text" name="" required="" onChange={(e)=>{this.setState({imgUrl:e.target.value})}}></input>
                <label>Image url</label>
                </div>
                <div className="user-box">
                <input type="text" name="" required="" max='20' onChange={(e)=>{this.setState({author:e.target.value})}}></input>
                <label>Name of author</label>
                </div>
                <div className="user-box">
                <textarea type="password" name="" required="" placeholder='Content of post' max='250' rows='5' onChange={(e)=>{this.setState({post:e.target.value})}}></textarea>
                </div>
                <a href="#" onClick={()=>{this.addNewPost()}}>
                Submit
                </a>
            </form>
        </div>
        )
    }
}

