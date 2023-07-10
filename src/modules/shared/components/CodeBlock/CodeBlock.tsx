import React from 'react'
import { CodeBlock } from 'react-code-blocks'

import { CodeBlockProps } from './CodeBlock.contracts'
import { useCodeBlock } from './CodeBlock.hooks'

/**
 * @see useCodeBlock
 * @see CodeBlockProps
 * @see https://github.com/rajinwonderland/react-code-blocks
 */
const CustomCodeBlock = (props: CodeBlockProps) => {
  const { config } = useCodeBlock(props)

  const codeBlockProps = {
    ...config,
    text: props.snippet,
    language: props.language ?? config.language,
    highlight: props.highlight ?? config.highlight,
    showLineNumbers: props.showLineNumbers ?? config.showLineNumbers,
    startingLineNumbers: props.startingLineNumbers ?? config.startingLineNumbers,
    theme: props.theme ?? config.theme
  }

  return (
    <CodeBlock { ...codeBlockProps } />
  )
}

export default CustomCodeBlock
