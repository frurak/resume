import { useMemo } from 'react'
import { useMatches } from 'react-router-dom'
import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../core/services/event-bus'
import { routesRegistry } from '../../../core/router/routes.config'

import { RouteConfig } from '../../root/contracts/routes.contracts'

import { DeviceType } from '../store/contracts'
import { useAbstractDeviceContentProvides } from './device'
import { useAbstractCacheControl, UseAbstractCacheControlContentProvides } from './cache-control'
import { UseAbstractPageContentHandlersContentProvides, useAbstractPageDataHandlers } from './page-data'
import { FULL_SCREEN_LOADER_EVENT } from '../components/FullScreenLoader/FullScreenLoader.config'

export interface AbstractViewProvidesOutput extends DeviceType, UseAbstractCacheControlContentProvides, UseAbstractPageContentHandlersContentProvides {
  viewConfig?: RouteConfig
  eventBus?: IEventBus
  setLoading?: (state: boolean) => void
}

export const useAbstractViewProvides = (): AbstractViewProvidesOutput => {
  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()
  const { hasCachedImages, hasCachedDocuments } = useAbstractCacheControl()
  const { firebaseService, fetchAndStoreImages, fetchAndStorePageContent } = useAbstractPageDataHandlers()

  const eventBus: IEventBus = useInjection(EventbusType)

  const currentRoute = useMatches()
  const viewConfig = useMemo(
    () => routesRegistry.find((route) => route.path === currentRoute[0].pathname),
    []
  )

  /**
   * Handles global full screen loader state
   */
  const setLoading = (state: boolean): void => {
    if (eventBus) {
      eventBus.$on(FULL_SCREEN_LOADER_EVENT, state)
    }
  }

  return {
    viewConfig, eventBus, isMobile, isTablet, isDesktop, firebaseService,
    hasCachedImages, hasCachedDocuments, fetchAndStoreImages, fetchAndStorePageContent, setLoading
  }
}
