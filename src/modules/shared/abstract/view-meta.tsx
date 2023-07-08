import { useMemo } from 'react'
import { useMatches } from 'react-router-dom'

import { routesRegistry } from '../../../core/router/routes.config'

import { RouteConfig } from '../../root/contracts/routes.contracts'

export interface AbstractViewProvidesOutput {
  viewConfig?: RouteConfig
}

export const useAbstractViewProvides = (): AbstractViewProvidesOutput => {
  const currentRoute = useMatches()
  const viewConfig = useMemo(
    () => routesRegistry.find((route) => route.path === currentRoute[0].pathname),
    []
  )

  return { viewConfig }
}
