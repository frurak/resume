
export interface ParagraphProps {
  content: string
  classNames?: Array<string>
  size?: string
}

export interface UseParagraphContentProvides {
  customClasses: Array<string>
}

export enum ParagraphSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md'
}
