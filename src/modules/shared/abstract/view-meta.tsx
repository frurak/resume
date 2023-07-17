import { useMemo } from 'react'
import { useMatches } from 'react-router-dom'
import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../core/services/event-bus'
import { routesRegistry } from '../../../core/router/routes.config'

import { RouteConfig } from '../../root/contracts/routes.contracts'

import { DeviceType } from '../store/contracts'

import { useAbstractDeviceContentProvides } from './device'

export interface AbstractViewProvidesOutput extends DeviceType {
  viewConfig?: RouteConfig
  eventBus?: IEventBus
}

export const useAbstractViewProvides = (): AbstractViewProvidesOutput => {
  const eventBus: IEventBus = useInjection(EventbusType)

  const currentRoute = useMatches()
  const viewConfig = useMemo(
    () => routesRegistry.find((route) => route.path === currentRoute[0].pathname),
    []
  )
  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()

  return { viewConfig, eventBus, isMobile, isTablet, isDesktop }
}
