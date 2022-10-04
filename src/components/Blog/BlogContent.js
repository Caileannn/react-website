import React from 'react'
import './BlogContent.css'

function BlogContent(props) {

    let blogTitle = props.blog_t;
    let blogText = props.blog_text;
    let blogDate = props.blog_d;
    let blogImg = props.blog_img;
    let blogNum = props.blog_n;


  return (
    <div className='blog-content-main'>
        <div className='blog-content-title'>
            <div className='bc-no'>
                # {blogNum}
            </div>
            <hr></hr>
            <div className='bc-date'>
                {blogDate}
            </div>
        </div>
        <div className='blog-content-body'>
            <div className='bb-text'>
                <h2>{blogTitle}</h2>
                <p>{blogText}</p>
            </div>
            <div className='bb-img'>
                <img src={blogImg} alt={blogTitle}></img>
            </div>
        </div>
    </div>
  )
}

export default BlogContent