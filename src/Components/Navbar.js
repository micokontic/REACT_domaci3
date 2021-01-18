import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div className='nav-container'>
            <div className='left-nav'>
                <NavLink to={{pathname:'/'}}><img src="../images/blog.svg" alt="Logo Image"></img></NavLink>
            </div>
            <div className='right-nav'>
                <NavLink to={{pathname:'/add-post'}}><a class="waves-effect waves-light btn-large">Add post</a></NavLink>
            </div>
        </div>
    )
}

export default Navbar
