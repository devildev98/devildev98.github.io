import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

import React from "react"

export const H1 = ({ children }) => (
  <Heading as="h1" size="3xl" pb="1rem">
    {children}
  </Heading>
)

export const H2 = ({ children }) => (
  <Heading as="h2" size="2xl" pb="1rem">
    {children}
  </Heading>
)

export const H3 = ({ children }) => (
  <Heading as="h3" size="xl" pb="1rem">
    {children}
  </Heading>
)

export const H4 = ({ children }) => (
  <Heading as="h4" size="lg" pb="1rem">
    {children}
  </Heading>
)

export const H5 = ({ children }) => (
  <Heading as="h5" size="md" pb="1rem">
    {children}
  </Heading>
)

export const H6 = ({ children }) => (
  <Heading as="h6" size="sm" pb="1rem">
    {children}
  </Heading>
)

export const P = ({ children }) => (
  <Text
    as="p"
    pb="1rem"
    fontSize={["sm", "md", "lg"]}
    letterSpacing="-0.005em"
    wordBreak="break-word"
  >
    {children}
  </Text>
)

export const BQuote = ({ children }) => (
  <Text
    as="blockquote"
    borderLeft="4px solid"
    borderLeftColor="blue.200"
    mx="0"
    pl="4"
    mb="1rem"
    mt="1rem"
    sx={{ ".chakra-text": { fontStyle: "italic", pb: "0" } }}
  >
    {children}
  </Text>
)

export const Ul = ({ children }) => (
  <UnorderedList pl="2">{children}</UnorderedList>
)
export const Ol = ({ children }) => <OrderedList pl="2">{children}</OrderedList>
export const Li = ({ children }) => (
  <ListItem fontSize={["sm", "md", "lg"]} letterSpacing="-0.005em">
    {children}
  </ListItem>
)

export const CTable = ({ children }) => (
  <Table
    pb="1rem"
    w="100%"
    my="4"
    variant="striped"
    fontSize={["sm", "md", "lg"]}
  >
    {children}
  </Table>
)

export const CTh = ({ children }) => (
  <Th verticalAlign="bottom" borderBottomWidth={["thin", "medium"]}>
    {children}
  </Th>
)
export const CTd = ({ children }) => (
  <Td verticalAlign="top" borderBottomWidth="thin">
    {children}
  </Td>
)

export const CThead = ({ children }) => <Thead bg="blue.400">{children}</Thead>
export const CTbody = ({ children }) => <Tbody>{children}</Tbody>
export const CTfoot = ({ children }) => <Tfoot>{children}</Tfoot>
export const CTr = ({ children }) => <Tr>{children}</Tr>
