import React from 'react'

import DrawerContainer from '../DrawerContainer/DrawerContainer'
import { useDrawerWrapper } from './DrawerWrapper.hooks'

/**
 * @see useDrawerWrapper
 */
const DrawersWrapper = () => {
  const { component, drawerConfig, isOpen, payload, close } = useDrawerWrapper()

  return (
    <span>
      { isOpen && component &&
        <div className="DrawersWrapper">
          <DrawerContainer config={ drawerConfig } closeCallback={ close }>
            { React.cloneElement(component, { component, payload }) }
          </DrawerContainer>
        </div>
      }
    </span>
  )
}

export default DrawersWrapper
