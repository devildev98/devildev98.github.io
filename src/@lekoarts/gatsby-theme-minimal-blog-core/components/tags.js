import React from "react"
import Tags from "../../../blog_components/tags"

export default function MinimalBlogCoreTags({ ...props }) {
  const {
    data: { allPost },
  } = props

  return <Tags list={allPost.group} {...props} />
}
