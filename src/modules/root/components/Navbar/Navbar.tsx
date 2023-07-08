import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import CustomLink from '../../../dsl/Link/Link'

import { NavbarProps, useNavbar } from './index'
import { AppReducers } from '../../../../core/store/reducers'
import { DrawerName, DrawersConnectorKey, IDrawersConnector } from '../../../../core/services/drawers'
import { useInjection } from 'inversify-react'

/**
 * @see useNavbar
 * @see NavbarProps
 */
const Navbar = (props: NavbarProps) => {
  /** Drawers Connector */
  const drawersConnector: IDrawersConnector = useInjection(DrawersConnectorKey)

  const { isMobile, isDesktop } = useSelector((state: AppReducers) => state.shared.device)
  const { navLinks, mapToLinkProps } = useNavbar(props)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = (): void => {
    drawersConnector.open(DrawerName.Menu, {}, {})
  }

  const toggleMenuOpen = (): void => {
    if (!isMenuOpen) {
      drawersConnector.open(DrawerName.Menu, {}, {})
    } else {
      drawersConnector.close()
    }

    setIsMenuOpen((prevState: boolean) => !prevState)
  }

  return (
    <nav className="Navbar container">
      <p className="Navbar__mark">Filip Rurak | Selected Work</p>

      { isDesktop &&
        <ul className="Navbar__list">
          { navLinks && navLinks.length > 0 &&
            navLinks.map((link, index) => (
              <li key={index}><CustomLink { ...mapToLinkProps(link) } /></li>
            ))
          }
        </ul>
      }

      { isMobile &&
        <div className={`Navbar__mobile-toggler ${ isMenuOpen ? '--open' : '--close' }`} onClick={ toggleMenuOpen }>
          { Array.from(Array(2)).map((e, i) => (<span key={ i }></span>)) }
        </div>
      }
    </nav>
  )
}

export default Navbar
