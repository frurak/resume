import { CodeBlockProps, UseCodeBlockContentProvides } from './CodeBlock.contracts'
import { codeBlockDefaultConfig } from './CodeBlock.config'

export const useCodeBlock = (props: CodeBlockProps): UseCodeBlockContentProvides => {
  const config = codeBlockDefaultConfig

  return { config }
}
