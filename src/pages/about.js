import React from "react"
import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/react"

const about = () => {
  return (
    <Layout>
      <Box p={8} bg="green.400">
        <Heading>About Page</Heading>
      </Box>
    </Layout>
  )
}

export default about
