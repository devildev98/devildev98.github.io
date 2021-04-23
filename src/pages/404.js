import { VStack, Heading, Center, Text, Link } from "@chakra-ui/layout"
import { Link as GatsbyLink } from "gatsby"
import React from "react"

const error = () => {
  return (
    <VStack spacing="5" mt="40vh">
      <Center>
        <Heading color="red.400">Error!</Heading>
      </Center>
      <Text fontSize="3xl">
        Page Not Found! Go To{" "}
        <Link as={GatsbyLink} to="/" color="teal.300">
          Home
        </Link>
      </Text>
    </VStack>
  )
}

export default error
