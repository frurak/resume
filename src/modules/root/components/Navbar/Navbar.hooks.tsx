import { NavbarProps } from 'react-bootstrap'
import { useMemo, useState } from 'react'

import { routesRegistry } from '../../../../core/router/routes.config'

import { LinkProps } from '../../../dsl/Link'

import { RouteConfig, RouteTargetType } from '../../contracts/routes.contracts'
import { navbarRoutesRegistry } from './Navbar.config'
import { useMatches } from 'react-router-dom'

/**
 * Navbar component logic
 */
export const useNavbar = (props: NavbarProps) => {
  const currentRoute = useMatches()
  const navLinks = useMemo(() => routesRegistry.filter((route) => navbarRoutesRegistry.includes(route.name)), [])

  const mapToLinkProps = (link: RouteConfig) => {
    let composedLink = {
      targetType: link.targetType
    } as Pick<LinkProps, 'targetType'>

    switch (link.targetType) {
      case RouteTargetType.Internal:
        composedLink = {
          ...composedLink,
          label: link.meta ? link.meta.title : '',
          target: link.path,
          isActive: currentRoute[0].pathname === link.path
        } as LinkProps
        break
      case RouteTargetType.External:
        composedLink = {
          ...composedLink,
          label: link.label,
          target: link.target
        } as LinkProps
        break
    }

    return composedLink
  }

  return { navLinks, mapToLinkProps }
}
