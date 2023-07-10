/**
 * AVAILABLE THEMES:
 * @see https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md
 */
import { obsidian, ocean, monokai, vs2015, anOldHope, codepen } from 'react-code-blocks'

import { CodeBlockConfig, CodeBlockLanguage, CodeBlockTheme } from './CodeBlock.contracts'

export const editorThemesRegistry: Record<string, any> = {
  [CodeBlockTheme.Ocean]: ocean,
  [CodeBlockTheme.Obsidian]: obsidian
}

/**
 * Default config
 */
export const codeBlockDefaultConfig: CodeBlockConfig = {
  language: CodeBlockLanguage.TypeScript,
  showLineNumbers: true,
  startingLineNumbers: 1,
  theme: editorThemesRegistry[CodeBlockTheme.Ocean]
}
