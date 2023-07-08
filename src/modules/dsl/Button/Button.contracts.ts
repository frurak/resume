
export interface ButtonProps {
  classNames?: Array<string>
  isDisabled?: boolean
  isLoading?: boolean
  hasIcon?: boolean
  label: string
  onClick?: () => void
  theme?: string
  type?: string
  variant?: string
}

export interface UseButtonContentProvides {
  classNames: Array<string>
  hasIcon: boolean
  type: ButtonType
}

export type ButtonType = 'button' | 'submit' | 'reset'

export enum ButtonTheme {
  Primary = 'primary'
  // ...
}

export enum ButtonVariant {
  Full = 'full',
  Outline = 'outline'
  // ...
}
