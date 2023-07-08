import { ButtonProps, ButtonType, UseButtonContentProvides } from './Button.contracts'

export const useButton = (props: ButtonProps): UseButtonContentProvides => {
  /**
   * @private
   */
  const _hasTheme = !!props.theme

  /**
   * @private
   */
  const _hasVariant = !!props.variant

  /**
   * @private
   */
  const _isLoading = !!props.isLoading

  /**
   * @private
   */
  const _hasIcon = !!props.hasIcon

  const classNames = props.classNames ?? []
  const type = props.type as ButtonType ?? 'button' as ButtonType
  const hasIcon = _hasIcon ? props.hasIcon as boolean : true

  if (_hasTheme) {
    classNames.unshift(`--theme-${ props.theme }`)
  }

  if (_hasVariant) {
    classNames.unshift(`--variant-${ props.variant }`)
  }

  if (_isLoading) {
    classNames.push('--loading')
  }

  return { classNames, hasIcon, type }
}
