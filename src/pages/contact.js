import React from "react"
import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/react"

const contact = () => {
  return (
    <Layout title="contact">
      <Box p={8} bg="blue.400">
        <Heading>Contact Page</Heading>
      </Box>
    </Layout>
  )
}

export default contact
