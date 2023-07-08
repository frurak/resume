import React from 'react'

import { ImageProps } from './Image.contracts'
import { useImage } from './Image.hooks'

/**
 * @see useImage
 * @see ImageProps
 */
const CustomImage = (props: ImageProps) => {
  const { classNames } = useImage(props)

  return (
    <img src={ props.src }
         alt={ props.alt ?? undefined }
         className={ `CustomImage ${ classNames }` } />
  )
}

export default CustomImage
