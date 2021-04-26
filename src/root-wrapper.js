import { MDXProvider } from "@mdx-js/react"
import React from "react"
import MDXComponents from "./styles/mdxcomponets"

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={MDXComponents}>{element}</MDXProvider>
)
