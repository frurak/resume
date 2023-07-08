import { ParagraphProps, ParagraphSize, UseParagraphContentProvides } from './Paragraph.contracts'

export const useParagraph = (props: ParagraphProps): UseParagraphContentProvides => {
  /**
   * @private
   */
  const _sizesDefinitions = Object.values(ParagraphSize) as Array<string>

  /**
   * @private
   */
  const _hasSizeDefined = !!props.size && _sizesDefinitions.includes(props.size)

  const customClasses = props.classNames
    ? _hasSizeDefined ? [`--size-${props.size}`, ...props.classNames] : [...props.classNames]
    : _hasSizeDefined ? [`--size-${props.size}`] : []

  return { customClasses }
}
