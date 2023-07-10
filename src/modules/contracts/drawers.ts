import { ReactElement } from 'react'
import { DrawerConfig } from '../../core/services/drawers'

export interface AbstractDrawerProps<PayloadInterface> {
  children?: ReactElement
  closeCallback: () => void
  component?: ReactElement
  config: DrawerConfig
  payload: PayloadInterface
}
