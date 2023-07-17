
export interface ImageProps {
  alt?: string
  classNames?: Array<string>
  isLazy?: boolean
  height?: number
  width?: number
  src: string
  style?: Record<string, string | number>
}

export interface UseImageContentProvides {
  classNames: string
  isLazy: boolean
  height: string
  width: string
}
