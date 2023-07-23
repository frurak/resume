import React, { CSSProperties, ReactElement } from 'react'

export interface DeviceProps {
  backgroundColor?: string
  device?: string
  image?: string
  imageClasses?: Array<string>
  customElements?: Array<CustomElement>
  DOMRef?: React.MutableRefObject<any>
  DOMElStyles?: CSSProperties
  order?: number
}

export interface UseDeviceContentProvides {
  backgroundColor: string
  deviceComponent: () => ReactElement
  hasCustomElements: boolean
}

export enum DeviceMockUp {
  Desktop = 'desktop',
  Mobile = 'mobile'
}

export interface CustomElement {
  id: string
  component: ReactElement
  classNames?: Array<string>
  styles: CSSProperties
  topPosition: number
  leftPosition: number
  zIndex: number
  scrollable?: ScrollableOptions
}

export interface ScrollableOptions {
  // delay in milliseconds
  delay?: number
  // scrolling speed calculated as % of normal scrolling speed
  speed: ScrollableSpeed
  // additional styles to override
  additionalStyles?: CSSProperties
}

export type ScrollableSpeed = '1.5' | '1' | '0.75' | '0.5'

