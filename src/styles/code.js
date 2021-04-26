import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import dtheme from "prism-react-renderer/themes/nightOwl"
import ltheme from "prism-react-renderer/themes/nightOwlLight"
import { FaCopy } from "react-icons/fa"
import {
  useColorMode,
  useClipboard,
  IconButton,
  Text,
  Badge,
  Code as ChCode,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react"
import { preToCodeBlock } from "mdx-utils"

function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value)
  return (
    <IconButton
      aria-label="Copy text"
      role="button"
      variant={hasCopied ? "solid" : "outline"}
      colorScheme="blue"
      onClick={onCopy}
      size="sm"
      icon={<FaCopy />}
    />
  )
}

function getParams(className = ``) {
  const [lang = ``, params = ``] = className.split(`:`)

  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      merged[key] = value
      return merged
    }, {})
  )
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  }
  // TODO: removed a !
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return index => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const Code = ({ codeString, className: blockClassName, metastring = `` }) => {
  const { colorMode } = useColorMode()
  const [language, { title = `` }] = getParams(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      theme={colorMode === "light" ? ltheme : dtheme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box p="2">
          {title && (
            <Box textAlign="left" px="3" mb="0" bg="lightblue">
              <Text color="blue.500">{title}</Text>
            </Box>
          )}

          <Box
            // pre
            as="pre"
            textAlign="left"
            overflow="scroll"
            className={className}
            style={style}
          >
            <Flex by="0px" my="0px">
              <Box ml="3">
                <Badge variant="solid" colorScheme="blue" fontSize="lg" b="0">
                  {language ? language : "Code"}
                </Badge>
              </Box>
              <Spacer />
              <Box mx="3" my="1">
                <CopyButton value={codeString} />
              </Box>
            </Flex>
            {tokens.map((line, i) => (
              <Box
                //Line
                key={i}
                bg={
                  shouldHighlightLine(i)
                    ? colorMode === "dark"
                      ? "rgb(2, 55, 81)"
                      : "orange.200"
                    : ""
                }
                borderLeft={
                  shouldHighlightLine(i)
                    ? "4px solid rgb(2, 155, 206)"
                    : "4px solid rgba(0,0,0,0)"
                }
                {...getLineProps({ line, key: i })}
              >
                <Box
                  // Line no
                  as="span"
                  textAlign="right"
                  px="1"
                  userSelect="none"
                  opacity="0.5"
                >
                  {i + 1}
                </Box>
                <Box
                  // Line content
                  as="span"
                  px="1"
                >
                  {line.map((token, key) => (
                    <Box
                      as="span"
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Highlight>
  )
}

const Pre = preProps => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <Code {...props} />
  }
  // if there is no code, then use chakra code.
  return <ChCode {...preProps} />
}
export default Pre
