import { useSelector } from 'react-redux'

import { AppReducers } from '../../../core/store/reducers'

import { DeviceType } from '../store/contracts'

export type UseAbstractDeviceContentProvides = DeviceType

export const useAbstractDeviceContentProvides = (): UseAbstractDeviceContentProvides => {
  const { isMobile, isTablet, isDesktop } = useSelector((state: AppReducers) => state.shared.device)

  return { isMobile, isTablet, isDesktop }
}
