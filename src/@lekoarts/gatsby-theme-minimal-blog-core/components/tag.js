import React from "react"
import Tag from "../../../blog_components/tag"

export default function MinimalBlogCoreTag({ ...props }) {
  const {
    data: { allPost },
  } = props

  return <Tag posts={allPost.nodes} {...props} />
}
