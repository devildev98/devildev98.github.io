import React from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import ItemTags from "./item-tags"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Post = ({ data: { post } }) => {
  return (
    <Layout
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    >
      <Heading size="2xl">{post.title}</Heading>
      <Text color="Highlight" mt="3">
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {post.timeToRead && ` — `}
        {post.timeToRead && <Box as="span">{post.timeToRead} min read</Box>}
      </Text>
      <Box as="section" my="2" w>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export default Post
