import React from "react"
import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout>
      <Box p={8} bg="tomato">
        <Heading>Home Page</Heading>
      </Box>
    </Layout>
  )
}

export default Home
