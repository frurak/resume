
export interface SharedInitialState {
  device: DeviceType
}

export interface DeviceType {
  isDesktop?: boolean
  isTablet?: boolean
  isMobile?: boolean
}
