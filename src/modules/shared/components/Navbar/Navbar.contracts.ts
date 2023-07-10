import { DeviceType } from '../../store/contracts'
import { LinkProps } from '../../../dsl/Link'

import { RouteConfig } from '../../../root/contracts/routes.contracts'

export interface NavbarProps {}

export interface UseNavbarContentProvides extends DeviceType {
  isMenuOpen: boolean
  hasBeenOpened: boolean
  mapToLinkProps: (link: RouteConfig) => LinkProps
  navLinks: Array<RouteConfig>
  toggleMenuOpen: () => void
}
