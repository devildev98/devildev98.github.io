import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { BsMoon } from "react-icons/bs"
import { FaSun } from "react-icons/fa"
import {
  Flex,
  Spacer,
  Box,
  Text,
  Button,
  Link,
  useColorMode,
  VStack,
  Divider,
  Icon,
} from "@chakra-ui/react"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <VStack align="stretch" p="2">
      <Flex p="4">
        <Box>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            Devil Blogs
          </Text>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <Icon as={BsMoon} /> : <Icon as={FaSun} />}
        </Button>
      </Flex>
      <Flex>
        <Box mr="4" ml="4">
          <Link as={GatsbyLink} to="/" className="nav-link">
            Home
          </Link>
        </Box>
        <Box mr="4">
          <Link as={GatsbyLink} to="/about">
            About
          </Link>
        </Box>
        <Box mr="4">
          <Link as={GatsbyLink} to="/contact" className="nav-link">
            Contact
          </Link>
        </Box>
        <Spacer />
        <Box mr="4">
          <Link as={GatsbyLink} to="/contact" className="nav-link">
            Contact
          </Link>
        </Box>
      </Flex>
      <Divider orientation="horizontal" opacity="1.0" />
    </VStack>
  )
}
export default Navbar
