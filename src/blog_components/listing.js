import React from "react"
import { Box } from "@chakra-ui/react"
import BlogListItem from "./blog-list-item.js"

const Listing = ({ posts, showTags = true }) => {
  return (
    <Box as="section" mb={[5, 6, 7]} mt={[5, 6, 7]}>
      {posts.map(post => (
        <BlogListItem key={post.slug} post={post} showTags={showTags} />
      ))}
    </Box>
  )
}

export default Listing
