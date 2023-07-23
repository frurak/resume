import React  from 'react'

import CustomLink from '../../../dsl/Link/Link'

import { NavbarProps, useNavbar } from './index'
import { RouteTargetType } from '../../../root/contracts/routes.contracts'

/**
 * @see useNavbar
 * @see NavbarProps
 */
const Navbar = (props: NavbarProps) => {
  const { isMobile, isTablet, isDesktop, isMenuOpen, hasBeenOpened, navLinks, mapToLinkProps, toggleMenuOpen } = useNavbar(props)

  return (
    <nav className="Navbar container">
      <CustomLink label="Filip Rurak | Selected Work"
                  target="/"
                  targetType={ RouteTargetType.Internal }
                  customClasses={['Navbar__mark']} />

      { isDesktop &&
        <ul className="Navbar__list">
          { navLinks && navLinks.length > 0 &&
            navLinks.map((link, index) => (
              <li key={index}><CustomLink { ...mapToLinkProps(link) } /></li>
            ))
          }
        </ul>
      }

      { (isMobile || isTablet) &&
        <div className={`Navbar__mobile-toggler ${ isMenuOpen ? '--open' : (hasBeenOpened ? '--close' : '') }`} onClick={ toggleMenuOpen }>
          { Array.from(Array(2)).map((e, i) => (<span key={ i }></span>)) }
        </div>
      }
    </nav>
  )
}

export default Navbar
