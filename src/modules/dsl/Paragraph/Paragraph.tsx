import { ParagraphProps } from './Paragraph.contracts'
import { useParagraph } from './Paragraph.hooks'

/**
 * @see useParagraph
 * @see ParagraphProps
 */
export const CustomParagraph = (props: ParagraphProps) => {
  const { customClasses } = useParagraph(props)

  return (
    <p className={`CustomParagraph ${customClasses.join(' ')}`}>
      { props.content }
    </p>
  )
}

export default CustomParagraph
