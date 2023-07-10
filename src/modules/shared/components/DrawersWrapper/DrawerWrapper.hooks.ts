import { useInjection } from 'inversify-react'
import { ReactElement, useEffect, useState } from 'react'

import {
  DrawerConfig,
  DrawerPayload,
  DrawersConnectorKey,
  DrawerStreamState,
  IDrawersConnector
} from '../../../../core/services/drawers'

import { UseDrawerWrapperContentProvides } from './DrawerWrapper.contracts'

export const useDrawerWrapper = (): UseDrawerWrapperContentProvides => {
  /** Drawers Connector */
  const _drawersConnector: IDrawersConnector = useInjection(DrawersConnectorKey)

  const [component, setComponent] = useState(undefined as ReactElement | undefined)
  const [drawerConfig, setDrawerConfig] = useState({} as DrawerConfig)
  const [isOpen, setIsOpen] = useState(false as boolean)
  const [payload, setPayload] = useState({} as DrawerPayload)

  /**
   * Initializes drawers subscriptions
   * @see DrawersConnector.subscribe
   */
  const initDrawer = () => {
    _drawersConnector.subscribe((drawerState: DrawerStreamState) => {
      setIsOpen(() => drawerState.opened)
      setDrawerConfig(() => drawerState.config)

      if (typeof _drawersConnector.name === 'string') {
        setComponent(() => _drawersConnector.getComponent(_drawersConnector.name as string))
      }

      setPayload(() => drawerState.payload)
    })
  }

  const close = (): void => {
    _drawersConnector.close()
  }

  useEffect(() => {
    initDrawer()
  }, [])

  return { component, drawerConfig, isOpen, payload, close }
}
