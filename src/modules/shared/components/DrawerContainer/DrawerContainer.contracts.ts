import { ReactElement } from 'react'

import { DrawerConfig } from '../../../../core/services/drawers'

export interface DrawerContainerProps {
  children: ReactElement
  closeCallback: () => void
  config: DrawerConfig
  payload?: any
}

export interface UseDrawerContainerContentProvides {
  isFullHeight: boolean
  hasCloseIcon: boolean
  hasHeading: boolean
  close: () => void
  getDrawerClasses: () => string
}
