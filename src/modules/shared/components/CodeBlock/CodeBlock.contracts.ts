
export interface CodeBlockProps {
  snippet: string
  language?: string
  highlight?: string
  showLineNumbers?: boolean
  startingLineNumbers?: number
  theme?: string
}

export interface UseCodeBlockContentProvides {
  config: CodeBlockConfig
}

export interface CodeBlockConfig {
  language: string
  showLineNumbers: boolean
  startingLineNumbers: number
  theme: string
  highlight?: string
}

/**
 * AVAILABLE THEMES:
 * https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md
 */
export enum CodeBlockLanguage {
  TypeScript = 'typescript'
}

/**
 * AVAILABLE LANGUAGES:
 * https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md
 */
export enum CodeBlockTheme {
  Ocean = 'ocean',
  Obsidian = 'obsidian'
}
