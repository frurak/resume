import React  from 'react'

import CustomLink from '../../../dsl/Link/Link'

import { NavbarProps, useNavbar } from './index'

/**
 * @see useNavbar
 * @see NavbarProps
 */
const Navbar = (props: NavbarProps) => {
  const { isMobile, isTablet, isDesktop, isMenuOpen, hasBeenOpened, navLinks, mapToLinkProps, toggleMenuOpen } = useNavbar(props)

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

      { (isMobile || isTablet) &&
        <div className={`Navbar__mobile-toggler ${ isMenuOpen ? '--open' : (hasBeenOpened ? '--close' : '') }`} onClick={ toggleMenuOpen }>
          { Array.from(Array(2)).map((e, i) => (<span key={ i }></span>)) }
        </div>
      }
    </nav>
  )
}

export default Navbar
