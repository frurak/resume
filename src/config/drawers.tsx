import React from 'react'

import { DrawerName, DrawersRegistry } from '../core/services/drawers'

import MenuDrawer from '../modules/shared/components/MenuDrawer/MenuDrawer'

export const drawersRegistry: DrawersRegistry = {
  [DrawerName.Menu]: <MenuDrawer />
}
