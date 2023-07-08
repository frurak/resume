import React from 'react'

interface HtmlMarkupComponentProps {
  classNames?: Array<string>
  content: string | React.ReactNode
  tagType: string
}

/**
 * Method that renders React component and sets its content as innerHTML. It wraps content with specific html tag
 */
export const HtmlMarkupComponent = (props: HtmlMarkupComponentProps) => {
  return React.createElement(
    props.tagType,
    {
      className: props.classNames ? props.classNames.join(' ') : '',
      dangerouslySetInnerHTML: { __html: props.content }
    }
  )
}

export default HtmlMarkupComponent
