import { DeviceProps } from '../../../shared/components/Device'
import { UseAbstractDeviceContentProvides } from '../../../shared/abstract/device'

export interface MobilesCarouselProps {}

export interface UseMobilesCarouselContentProvides extends UseAbstractDeviceContentProvides {
  devices: Array<DeviceProps>
  onReachMeBtnClick: () => void
}
