import React from 'react'
import { useInjection } from 'inversify-react'
import { useMatches } from 'react-router-dom'

import { AbstractDrawerProps } from '../../../contracts/drawers'
import CustomLink from '../../../dsl/Link/Link'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { LinkProps } from '../../../dsl/Link'

import { MenuDrawerPayload } from './MenuDrawer.contracts'

const MenuDrawer = (props: AbstractDrawerProps<MenuDrawerPayload>) => {
  /**
   * @private
   */
  const _eventBus: IEventBus = useInjection(EventbusType)

  const { navLinks } = props.payload

  const currentRoute = useMatches()

  const clickCallback = (link: LinkProps): void => {
    if (link.target === currentRoute[0].pathname) {
      _eventBus.$on('app:navbar-toggle-close', null)
    }

    props.closeCallback()
  }

  return (
    <div className="MenuDrawer">
      <ul className="MenuDrawer__list">
        { navLinks && navLinks.length > 0 &&
          navLinks.map((link, index) => (
            <li key={index}><CustomLink { ...link } onClick={ () => clickCallback(link) } /></li>
          ))
        }
      </ul>
    </div>
  )
}

export default MenuDrawer
