import React from "react"
import Blog from "../../../blog_components/blog"

export default function MinimalBlogCoreBlog({ ...props }) {
  const {
    data: { allPost },
  } = props
  return <Blog posts={allPost.nodes} />
}
