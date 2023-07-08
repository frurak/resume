import React from 'react'

import HtmlMarkupComponent from '../../shared/abstract/html-markup-component'

import { HeadingProps } from './Heading.contracts'
import { useHeading } from './Heading.hooks'

/**
 * @see useHeading
 * @see HeadingProps
 */
export const CustomHeading = (props: HeadingProps) => {
  const { level, customClasses } = useHeading(props)

  const HeadingLevelTag = level

  return (
    props.renderAsHtml
      ? <HtmlMarkupComponent classNames={ customClasses } tagType={ level } content={ props.content } />

      // @ts-ignore FIXME
      : <HeadingLevelTag className={`CustomHeading ${ customClasses.join(' ') }`}>
        { props.content }
      </HeadingLevelTag>
  )
}

export default CustomHeading
