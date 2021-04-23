import { extendTheme } from "@chakra-ui/react"
const Link = {
  // The styles all Links have in common
  baseStyle: {
    transition: `all 0.30s ease-out`,
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: {
      textDecoration: "underline",
      color: "gray.400",
    },
    _focus: {
      boxShadow: "outline",
    },
  },
}
const theme = {
  components: {
    Link,
  },
}
export default extendTheme(theme)
