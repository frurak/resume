import React, { ReactElement, useEffect, useState } from 'react'
import { useInjection } from 'inversify-react'

import {
  DrawerPayload,
  DrawersConnectorKey,
  DrawerStreamState,
  IDrawersConnector
} from '../../../../core/services/drawers'
import DrawerContainer from '../DrawerContainer/DrawerContainer'

const DrawersWrapper = () => {
  /** Drawers Connector */
  const drawersConnector: IDrawersConnector = useInjection(DrawersConnectorKey)

  const [component, setComponent] = useState(undefined as ReactElement | undefined)
  const [isOpen, setIsOpen] = useState(false as boolean)
  const [payload, setPayload] = useState({} as DrawerPayload)

  const initDrawer = () => {
    drawersConnector.subscribe((drawerState: DrawerStreamState) => {
      setIsOpen(() => drawerState.opened)

      if (typeof drawersConnector.name === 'string') {
        setComponent(() => drawersConnector.getComponent(drawersConnector.name as string))
      }

      setPayload(() => drawerState.payload)
    })
  }

  useEffect(() => {
    initDrawer()
  }, [])

  return (
    <div className="DrawersWrapper">
      { isOpen && component &&
        <DrawerContainer>
          { React.cloneElement(component, { component, payload }) }
        </DrawerContainer>
      }
    </div>
  )
}

export default DrawersWrapper
