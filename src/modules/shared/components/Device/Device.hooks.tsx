import React, { ReactElement } from 'react'

import { DeviceMockUp, DeviceProps, UseDeviceContentProvides } from './Device.contracts'

import { ReactComponent as MobileMockUp } from './assets/mobile.svg'
import { ReactComponent as DesktopMockUp } from './assets/desktop.svg'

export const useDevice = (props: DeviceProps): UseDeviceContentProvides => {
  /**
   * @private
   */
  const _DEFAULT_BACKGROUND_COLOR = '#FFFFFF'

  const backgroundColor = props.backgroundColor ? `#${ props.backgroundColor }` : _DEFAULT_BACKGROUND_COLOR
  const hasCustomElements = Array.isArray(props.customElements) && props.customElements.length > 0

  /**
   * Returns device component
   */
  const deviceComponent = (): ReactElement => {
    let component = <MobileMockUp />

    switch (props.device) {
      case DeviceMockUp.Mobile:
        component = <MobileMockUp />
        break
      case DeviceMockUp.Desktop:
        component = <DesktopMockUp />
        break
    }

    return component
  }

  return { backgroundColor, hasCustomElements, deviceComponent }
}
