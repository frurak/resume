import { useButton } from './Button.hooks'
import { ButtonProps } from './Button.contracts'

import { ReactComponent as ArrowIcon } from '../../../assets/icons/ArrowRightIcon.svg'

/**
 * @see useButton
 * @see ButtonProps
 */
export const CustomButton = (props: ButtonProps) => {
  const { classNames, hasIcon, type } = useButton(props)

  return (
    <button type={ type }
            className={ `CustomButton ${classNames.join(' ')}` }
            disabled={ props.isDisabled }
            onClick={ props.onClick }>
      <span className="CustomButton__text">{ props.label }</span>
      { hasIcon && <span className="CustomButton__icon"><ArrowIcon /></span>}
    </button>
  )
}

export default CustomButton
