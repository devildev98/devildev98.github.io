import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box } from "@chakra-ui/layout"
import Seo from "./seo"
import "katex/dist/katex.min.css"

const Layout = ({
  title = "",
  description = "",
  image = "",
  pathname = "",
  children,
}) => {
  return (
    <Box w="100%" justifyContent="center" display="flex">
      <Box w="90%" p="1">
        <Seo
          title={title}
          description={description}
          image={image}
          pathname={pathname}
        />
        <Navbar />
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
