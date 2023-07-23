
import React from 'react'

import { CustomElement } from '../../../shared/components/Device'
import { DeviceType } from '../../../shared/store/contracts'
import { PageDescriptiveContent } from '../../../contracts/page'

export interface DeviceMockupProps {
  description: PageDescriptiveContent
}

export interface UseDeviceMockupContentProvides extends DeviceType {
  customElements: Array<CustomElement>
  mockUpsContainerRef: React.MutableRefObject<any>
  mockupSectionHeight: any
  onReachMeBtnClick: () => void
}
