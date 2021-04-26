import { Flex, Link, Heading } from "@chakra-ui/react"
import React from "react"
import { Link as GLink } from "gatsby"
import Layout from "../components/layout"
import useMinimalBlogConfig from "../hooks/use-minimal_blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"

const Tag = ({ posts, pageContext }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()
  return (
    <Layout title={`Tag: ${pageContext.name}`}>
      <Flex alignItems="center" justifyContent="space-between" direction="wrap">
        <Heading size="3xl" mt="2" mb="2">
          {pageContext.name}
        </Heading>
        <Link
          as={GLink}
          mt="2"
          mb="2"
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </Flex>
      <Listing posts={posts} />
    </Layout>
  )
}

export default Tag
