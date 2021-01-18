import React from 'react'

function Card({post}) {
    console.log(post)
    return (<>
            <div className="card__background" style={{backgroundImage:`url(${post.image_url})`}}></div>
            <div className="card__content">
              <p className="card__category">{post.author}</p>
              <h2 className="card__heading">{post.title}</h2>
            </div>
            </>
    )
}

export default Card
