import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ImageProps } from './Image.contracts'
import { useImage } from './Image.hooks'


/**
 * @see useImage
 * @see ImageProps
 */
const CustomImage = (props: ImageProps) => {
  const { classNames, isLazy, height, width } = useImage(props)

  return (
    isLazy
      ? !!props.src && props.src.length > 0
        ? <LazyLoadImage className={ `CustomImage ${ classNames }` }
                         alt={ props.alt ?? undefined }
                         src={ props.src }
                         height={ height }
                         width={ width }
                         style={{ ...props.style }} />
        : <></>

      : !!props.src && props.src.length > 0
        ? <img className={ `CustomImage ${ classNames }` }
               alt={ props.alt ?? undefined }
               src={ props.src }
               height={ height }
               width={ width }
               style={{ ...props.style }} />
        : <></>
  )
}

export default CustomImage
