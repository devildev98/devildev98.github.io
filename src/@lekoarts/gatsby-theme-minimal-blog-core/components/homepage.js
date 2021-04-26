import React from "react"
import Homepage from "../../../pages/index"

export default function MinimalBlogCoreHomepage({ ...props }) {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.nodes} {...props} />
}
