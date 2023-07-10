import { ReactElement } from 'react'

import { DrawerConfig, DrawerPayload } from '../../../../core/services/drawers'

export interface UseDrawerWrapperContentProvides {
  component: ReactElement | undefined
  close: () => void
  drawerConfig: DrawerConfig
  isOpen: boolean
  payload: DrawerPayload
}
