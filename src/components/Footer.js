import React from "react"
import { Center, Text, Link, Divider, Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box p="2">
      <Divider orientation="horizontal" opacity="1.0" />
      <Center h="4rem">
        <Text>
          &copy; {new Date().getFullYear()} <span>Devil Blogs</span> Built With{" "}
          <Link href="https://www.gatsbyjs.com/" isExternal>
            Gatsby
          </Link>
        </Text>
      </Center>
    </Box>
  )
}

export default Footer
