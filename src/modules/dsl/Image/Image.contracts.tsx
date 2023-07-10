
export interface ImageProps {
  alt?: string
  classNames?: Array<string>
  isLazy?: boolean
  height?: number
  width?: number
  src: string
}

export interface UseImageContentProvides {
  classNames: string
  isLazy: boolean
  height: string
  width: string
}
