import { availableHeadingSizes, HeadingProps, HeadingSize, UseHeadingContentProvides } from './Heading.contracts'

export const useHeading = (props: HeadingProps): UseHeadingContentProvides => {
  /**
   * @private
   * */
  const _sizesDefinitions = Object.values(HeadingSize) as Array<string>

  /**
   * @private
   */
  const _hasSizeDefined = !!props.size && _sizesDefinitions.includes(props.size)

  const customClasses = props.classNames
    ? _hasSizeDefined ? [`--size-${props.size}`, ...props.classNames] : [...props.classNames]
    : _hasSizeDefined ? [`--size-${props.size}`] : []

  const level = props.level ? availableHeadingSizes[props.level] : 'h2'

  return { level, customClasses }
}
