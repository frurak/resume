import { ImageProps, UseImageContentProvides } from './Image.contracts'

export const useImage = (props: ImageProps): UseImageContentProvides => {
  const classNames = props.classNames ? props.classNames.join(' ') : ''

  return { classNames }
}
