import React, { MouseEventHandler } from 'react'

import { DeviceProps } from '../../../shared/components/Device'
import { UseAbstractDeviceContentProvides } from '../../../shared/abstract/device'

import { CarouselWidthData } from '../../views/WebDesign/WebDesign.contracts'

export interface DevicesCarouselProps {
  items: DevicesResponsive<Array<Omit<DeviceProps, 'device'>>>
}

export interface DevicesResponsive<Type> {
  desktop: Type
  mobile: Type
}

export interface UseDevicesCarouselContentProvides extends UseAbstractDeviceContentProvides {
  isPrevNaviDisabled: boolean
  isNextNaviDisabled: boolean
  hasNavi: boolean

  getCarouselWidth: () => CarouselWidthData | undefined
  onCarouselNaviClick: (e: React.MouseEvent, direction: string)
    => MouseEventHandler<HTMLSpanElement> | undefined
}
