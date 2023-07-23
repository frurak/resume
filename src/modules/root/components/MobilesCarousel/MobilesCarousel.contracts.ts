import { DeviceProps } from '../../../shared/components/Device'
import { UseAbstractDeviceContentProvides } from '../../../shared/abstract/device'

export interface MobilesCarouselProps {
  items: Array<DeviceProps>
}

export interface UseMobilesCarouselContentProvides extends UseAbstractDeviceContentProvides {
  onReachMeBtnClick: () => void
}
