import React from 'react'
import BlogHero from '../../components/blogs/blog-hero'
import BlogList from '../../components/blogs/blog-list'
import Cta from '../../components/home/cta'

const Blogs = () => {
  return (
    <div>
      <BlogHero />
      <BlogList />
      <Cta />
    </div>
  )
}

export default Blogs