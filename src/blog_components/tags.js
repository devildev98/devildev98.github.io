import React from "react"
import { Box, Flex, Link, Heading, Spacer } from "@chakra-ui/react"
import kebabCase from "lodash.kebabcase"
import { Link as GLink } from "gatsby"
import Layout from "../components/layout"
import useMinimalBlogConfig from "../hooks/use-minimal_blog-config"
import replaceSlashes from "../utils/replaceSlashes"

const Tags = ({ list }) => {
  const { tagsPath, blogPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout title="tags">
      <Box p="8" w="100%">
        <Flex mb={["4", "5"]}>
          <Box>
            <Heading size="3xl">Tags</Heading>
          </Box>
          <Spacer />
          <Box pt="6">
            <Link
              as={GLink}
              mt="2"
              mb="2"
              to={replaceSlashes(`/${basePath}/${blogPath}`)}
            >
              View all blogs
            </Link>
          </Box>
        </Flex>
        <Box mt={[4, 5]}>
          {list.map(listItem => (
            <Flex key={listItem.fieldValue} mb={[1, 1, 2]} alignItems="center">
              <Link
                as={GLink}
                mr="2"
                to={replaceSlashes(
                  `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
                )}
              >
                {listItem.fieldValue}{" "}
                <Box as="span" color="gray.400">
                  ({listItem.totalCount})
                </Box>
              </Link>
            </Flex>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}

export default Tags
