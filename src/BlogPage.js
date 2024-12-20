import React from 'react'
import { blogdata } from './blogdata'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
  function BlogLink({ post }) {
    return (
      <>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </>
    )
  }
}

export { BlogPage }
