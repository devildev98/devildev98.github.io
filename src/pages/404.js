import {
  Flex,
  VStack,
  Heading,
  Center,
  Text,
  Link,
  Box,
} from "@chakra-ui/layout"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import Seo from "../components/seo"

const error = () => {
  return (
    <VStack spacing="5" mt="40vh">
      <Seo title="404" />
      <Center>
        <Heading color="red.400">Error!</Heading>
      </Center>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box mr="1" textAlign="center">
          <Text fontSize="3xl">Page Not Found!</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="3xl">
            Go To{" "}
            <Link as={GatsbyLink} to="/home" color="teal.300">
              Home
            </Link>
          </Text>
        </Box>
      </Flex>
    </VStack>
  )
}

export default error
