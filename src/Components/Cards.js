import React from 'react'
import '../Cards.css';
import Card from './Card'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

function Cards({posts}) {
  
    return (
        <section className="hero-section">
        <div className="card-grid">
          {
          posts.length>0?posts.map((post)=>{
            return (
             
            <Link className='card' to={{pathname:`./${post.id}`}}><Card post={post}></Card></Link>
            
            )
          }):'NO POSTS'}
         
        </div>
      </section>
    )
}

export default Cards
