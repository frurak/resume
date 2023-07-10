import React from 'react'

import { AbstractDrawerProps } from '../../../contracts/drawers'
import CustomLink from '../../../dsl/Link/Link'

import { MenuDrawerPayload } from './MenuDrawer.contracts'

const MenuDrawer = (props: AbstractDrawerProps<MenuDrawerPayload>) => {
  const { navLinks } = props.payload

  return (
    <div className="MenuDrawer">
      <ul className="MenuDrawer__list">
        { navLinks && navLinks.length > 0 &&
          navLinks.map((link, index) => (
            <li key={index}><CustomLink { ...link } onClick={ props.closeCallback } /></li>
          ))
        }
      </ul>
    </div>
  )
}

export default MenuDrawer
