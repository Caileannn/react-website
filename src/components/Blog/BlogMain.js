import React from 'react'
import BlogContent from './BlogContent'
import './BlogMain.css'


function BlogMain() {

  const blogContents = [
    {
        b_title: "Hello World",
        b_text: "I will most likely throw random projects/experiments into this section!",
        b_date: "02-10-2022",
        b_img: "Logo.png",
        b_num: "01"
    },
]

const bList = blogContents.map( elem => {
  return <BlogContent blog_t={elem.b_title} blog_text={elem.b_text} blog_d={elem.b_date} blog_img={elem.b_img} blog_n={elem.b_num}/>
})

  return (
    <div>
      <p>
        My Graveyard ⚰️
      </p>
      <div className='blog-content'>
          {bList}
      </div>
    </div>
  )
}

export default BlogMain