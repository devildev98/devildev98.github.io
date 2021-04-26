import React from "react"
import { Link as GLink } from "gatsby"
import { BsMoon } from "react-icons/bs"
import { FaSun, FaLinkedin, FaKaggle } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
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
    <VStack align="stretch" p="1">
      <Flex p="4">
        <Box>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            <Link as={GLink} to="/" variant="header">
              DevilDev
            </Link>
          </Text>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <Icon as={BsMoon} /> : <Icon as={FaSun} />}
        </Button>
      </Flex>
      <Flex>
        <Box mr="4" ml="4">
          <Link as={GLink} to="/about">
            About
          </Link>
        </Box>
        <Box mr="4">
          <Link as={GLink} to="/blog">
            Blog
          </Link>
        </Box>
        <Box mr="4">
          <Link as={GLink} to="/contact">
            Contact
          </Link>
        </Box>
        <Spacer />
        <Box mr="4">
          <Link href="https://github.com/devildev98" isExternal color="primary">
            <FiGithub fontSize="1.4rem" />
          </Link>
        </Box>
        <Box mr="4">
          <Link
            href="https://github.com/devildev98"
            isExternal
            color="blue.800"
          >
            <FaLinkedin fontSize="1.4rem" />
          </Link>
        </Box>
        <Box mr="4">
          <Link
            href="https://github.com/devildev98"
            isExternal
            color="blue.400"
          >
            <FaKaggle fontSize="1.4rem" />
          </Link>
        </Box>
      </Flex>
      <Divider orientation="horizontal" opacity="1.0" />
    </VStack>
  )
}
export default Navbar
