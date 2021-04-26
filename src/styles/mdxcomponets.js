import React from "react"
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  BQuote,
  Ul,
  Ol,
  Li,
  CTable,
  CTbody,
  CTd,
  CTh,
  CThead,
  CTr,
  CTfoot,
} from "./typography"
import Pre from "./code"
import { Link } from "@chakra-ui/react"
import { Link as GLink } from "gatsby"
// const isUrl = string => {
//   return string.match(
//     /^(ht|f)tps?:\/\/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|\\^[\]`]+)?$/
//   )
// }

const CLink = ({ href, children }) => {
  return (
    <Link as={GLink} to={href} isExternal>
      {children}
    </Link>
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
  blockquote: BQuote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: CTable,
  th: CTh,
  td: CTd,
  tr: CTr,
  thead: CThead,
  tbody: CTbody,
  tfoot: CTfoot,
  pre: Pre,
  a: CLink,
  wrapper: ({ children }) => <>{children}</>,
}
export default MDXcomponents
