import { NavbarProps } from 'react-bootstrap'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMatches } from 'react-router-dom'
import { useInjection } from 'inversify-react'

import { AppReducers } from '../../../../core/store/reducers'
import { DrawerName, DrawersConnectorKey, IDrawersConnector } from '../../../../core/services/drawers'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { routesRegistry } from '../../../../core/router/routes.config'

import { LinkProps } from '../../../dsl/Link'
import { RouteConfig, RouteTargetType } from '../../../root/contracts/routes.contracts'

import { MenuDrawerPayload } from '../MenuDrawer'
import { navbarRoutesRegistry } from './Navbar.config'
import { UseNavbarContentProvides } from './Navbar.contracts'

/**
 * Navbar component logic
 */
export const useNavbar = (props: NavbarProps): UseNavbarContentProvides => {
  /**
   * @private
   */
  const _drawersConnector: IDrawersConnector = useInjection(DrawersConnectorKey)

  /**
   * @private
   */
  const _eventBus: IEventBus = useInjection(EventbusType)

  const { isMobile, isTablet, isDesktop } = useSelector((state: AppReducers) => state.shared.device)

  const currentRoute = useMatches()
  const navLinks = useMemo(() => routesRegistry.filter((route) => navbarRoutesRegistry.includes(route.name)), [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  const toggleMenuOpen = (): void => {
    setHasBeenOpened(true)

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

  useEffect(() => {
    if (_eventBus) {
      _eventBus.$watch('app:navbar-toggle-close', () => {
        setIsMenuOpen(false)
      })
    }
  }, [])

  return { isMobile, isTablet, isDesktop, isMenuOpen, hasBeenOpened, navLinks, mapToLinkProps, toggleMenuOpen }
}
