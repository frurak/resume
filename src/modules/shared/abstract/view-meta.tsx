import { useMemo } from 'react'
import { useMatches } from 'react-router-dom'

import { routesRegistry } from '../../../core/router/routes.config'

import { RouteConfig } from '../../root/contracts/routes.contracts'
import { useSelector } from 'react-redux'
import { AppReducers } from '../../../core/store/reducers'
import { DeviceType } from '../store/contracts'

export interface AbstractViewProvidesOutput extends DeviceType {
  viewConfig?: RouteConfig
}

export const useAbstractViewProvides = (): AbstractViewProvidesOutput => {
  const currentRoute = useMatches()
  const viewConfig = useMemo(
    () => routesRegistry.find((route) => route.path === currentRoute[0].pathname),
    []
  )

  const { isMobile, isTablet, isDesktop } = useSelector((state: AppReducers) => state.shared.device)

  return { viewConfig, isMobile, isTablet, isDesktop }
}
