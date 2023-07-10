import { ImageProps, UseImageContentProvides } from './Image.contracts'

export const useImage = (props: ImageProps): UseImageContentProvides => {
  const classNames = props.classNames ? props.classNames.join(' ') : ''
  const isLazy = props.isLazy ?? true
  const height = props.height ? props.height.toString() : '500'
  const width = props.width ? props.width.toString() : '500'

  return { classNames, isLazy, height, width }
}
