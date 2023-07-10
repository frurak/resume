import React from 'react'

export interface LinkProps {
  customClasses?: Array<string>
  isActive?: boolean
  target?: string
  label?: string | React.ReactNode
  targetType?: string
  onClick?: (e?: any) => void
}

export interface UseLinkContentProvides {
  customClasses: string
}
