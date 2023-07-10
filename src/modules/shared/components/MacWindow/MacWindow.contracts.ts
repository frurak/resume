import { ReactElement } from 'react'

export interface MacWindowProps {
  content: ReactElement | string
  contentColor?: string
  contentPadding?: boolean
  theme?: string
  topText?: string
}

export interface UseMacWindowContentProvides {
  contentPadding: boolean
  themeClass: string
}

export enum MacWindowTheme {
  Dark = 'dark',
  Light = 'light',
  DarkReverse = 'dark-reverse'
}
