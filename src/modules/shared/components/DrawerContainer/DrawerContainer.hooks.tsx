import { DrawerContainerProps, UseDrawerContainerContentProvides } from './DrawerContainer.contracts'

export const useDrawerContainer = (props: DrawerContainerProps): UseDrawerContainerContentProvides => {
  const blurred = !!props.config.blurred
  const isFullHeight = !!props.config.fullHeight
  const hasCloseIcon = !!props.config.hasCloseIcon
  const hasHeading = !!props.config.heading

  const close = (): void => {
    props.closeCallback()
  }

  const getDrawerClasses = (): string => {
    const classes = []

    if (blurred) {
      classes.push('--blurred')
    }
    if (isFullHeight) {
      classes.push('--full-height')
    }
    if (hasHeading) {
      classes.push('--with-heading')
    }
    if (hasCloseIcon) {
      classes.push('--with-close-icon')
    }

    return classes.join(' ')
  }

  return { isFullHeight, hasCloseIcon, hasHeading, close, getDrawerClasses }
}
