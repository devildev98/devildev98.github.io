import { Box, Heading, Flex, Link, Spacer } from "@chakra-ui/layout"
import React from "react"
import Layout from "../components/Layout"
import { Link as GLink } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal_blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"

const Blog = ({ posts }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()
  return (
    <Layout title="Blog">
      <Box p="8" w="100%">
        <Flex mb={["4", "5"]}>
          <Box>
            <Heading size="3xl">Blogs</Heading>
          </Box>
          <Spacer />
          <Box pt="6">
            <Link
              as={GLink}
              mt="2"
              mb="2"
              to={replaceSlashes(`/${basePath}/${tagsPath}`)}
            >
              View all tags
            </Link>
          </Box>
        </Flex>
        <Listing posts={posts} />
      </Box>
    </Layout>
  )
}

export default Blog
