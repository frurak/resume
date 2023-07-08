import React from 'react'

export interface HeadingProps {
  content: string | React.ReactNode
  classNames?: Array<string>
  size?: string
  level?: string
  renderAsHtml?: boolean
}

export interface UseHeadingContentProvides {
  level: string
  customClasses: Array<string>
}

export const availableHeadingSizes: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
}

export enum HeadingSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md'
}

