import { NavbarProps } from 'react-bootstrap'
import { useMemo, useState } from 'react'

import { routesRegistry } from '../../../../core/router/routes.config'

import { LinkProps } from '../../../dsl/Link'

import { RouteConfig, RouteTargetType } from '../../../root/contracts/routes.contracts'
import { navbarRoutesRegistry } from './Navbar.config'
import { useMatches } from 'react-router-dom'
import { DrawerName, DrawersConnectorKey, IDrawersConnector } from '../../../../core/services/drawers'
import { useInjection } from 'inversify-react'
import { UseNavbarContentProvides } from './Navbar.contracts'
import { useSelector } from 'react-redux'
import { AppReducers } from '../../../../core/store/reducers'
import { MenuDrawerPayload } from '../MenuDrawer'

/**
 * Navbar component logic
 */
export const useNavbar = (props: NavbarProps): UseNavbarContentProvides => {
  /** Drawers Connector */
  const _drawersConnector: IDrawersConnector = useInjection(DrawersConnectorKey)

  const { isMobile, isTablet, isDesktop } = useSelector((state: AppReducers) => state.shared.device)

  const currentRoute = useMatches()
  const navLinks = useMemo(() => routesRegistry.filter((route) => navbarRoutesRegistry.includes(route.name)), [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  const toggleMenuOpen = (): void => {
    setHasBeenOpened(prevState => true)

    if (!isMenuOpen) {
      _drawersConnector.open(
        DrawerName.Menu,
        { ..._buildMenuDrawerPayload() },
        { blurred: true, hasCloseIcon: false }
      )
    } else {
      _drawersConnector.close()
    }

    setIsMenuOpen((prevState: boolean) => !prevState)
  }

  const mapToLinkProps = (link: RouteConfig): LinkProps => {
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

  const _buildMenuDrawerPayload = (): MenuDrawerPayload => {
    return {
      navLinks: navLinks.map((link) => mapToLinkProps(link))
    }
  }

  return { isMobile, isTablet, isDesktop, isMenuOpen, hasBeenOpened, navLinks, mapToLinkProps, toggleMenuOpen }
}
