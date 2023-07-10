import React from 'react'

import { DrawerConfig, DrawerName, DrawersRegistry } from '../core/services/drawers'

import MenuDrawer from '../modules/shared/components/MenuDrawer/MenuDrawer'

export const drawersRegistry: DrawersRegistry = {
  // @ts-ignore
  [DrawerName.Menu]: <MenuDrawer />
}

export const drawersDefaultConfig: DrawerConfig = {
  blurred: false,
  fullHeight: false,
  hasCloseIcon: true
}
