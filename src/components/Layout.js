import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box } from "@chakra-ui/layout"

const Layout = ({ children }) => {
  return (
    <Box w="100%" m="1">
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
