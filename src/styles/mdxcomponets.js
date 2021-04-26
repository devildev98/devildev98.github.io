import React from "react"
import { Image, Box } from "@chakra-ui/react"
import { H1, H2, H3, H4, H5, H6, P } from "./typography"
import Pre from "./code"
import GatsbyImage from "gatsby-plugin-image"

// import { Link as GLink } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// const CLink = ({ href, ...children }) => (
//   <Link as={GLink} to=""
// )

const isUrl = string => {
  string.match(
    /^(ht|f)tps?:\/\/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|\\^[\]`]+)?$/
  )
}

const CustomImage = ({ src, width, height, alt }) => {
  return (
    <Box>
      <GatsbyImage src={src} alt={alt} />
    </Box>
  )
}
const MDXcomponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  pre: Pre,
  wrapper: ({ children }) => <>{children}</>,
  // img: CustomImage,
}
export default MDXcomponents
