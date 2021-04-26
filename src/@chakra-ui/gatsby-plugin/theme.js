import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: {
      bg: mode("orange.100", "#1A202C")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
}

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
      color: "gray.200",
    },
  },
}
const theme = {
  components: {
    Link,
  },
  styles,
}
export default extendTheme(theme)
