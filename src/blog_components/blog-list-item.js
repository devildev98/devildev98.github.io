import React from "react"
import { Box, Link, Text } from "@chakra-ui/react"
import { Link as GLink } from "gatsby"
import ItemTags from "./item-tags"

const BlogListItem = ({ post, showTags = true }) => (
  <Box mb={4}>
    <Link as={GLink} to={post.slug}>
      {post.title}
    </Link>
    <Text color="gray.400" mt="1">
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </Text>
  </Box>
)

export default BlogListItem
