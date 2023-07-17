
import React from 'react'

import { DeviceType } from '../../../shared/store/contracts'
import { CustomElement } from '../../../shared/components/Device'

export interface DeviceMockupProps {}

export interface UseDeviceMockupContentProvides extends DeviceType {
  customElements: Array<CustomElement>
  mockUpsContainerRef: React.MutableRefObject<any>
  mockupSectionHeight: any
  onReachMeBtnClick: () => void
}
