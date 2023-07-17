import { useInjection } from 'inversify-react'

import { DeviceMockUp } from '../../../shared/components/Device'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { useAbstractDeviceContentProvides } from '../../../shared/abstract/device'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/redirect-linkedin'

import { MobilesCarouselProps, UseMobilesCarouselContentProvides } from './MobilesCarousel.contracts'

export const useMobilesCarousel = (props: MobilesCarouselProps): UseMobilesCarouselContentProvides => {
  /**
   * @private
   */
  const _eventBus: IEventBus = useInjection(EventbusType)

  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()

  const onReachMeBtnClick = (): void => {
    if (_eventBus) {
      _eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  const devices = [
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-3.jpg')
    },
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-2.jpg')
    },
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-1.jpg')
    },
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-3.jpg')
    },
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-2.jpg')
    },
    {
      device: DeviceMockUp.Mobile,
      image: require('../../../../assets/design/mobiles/restbill-1.jpg')
    }
  ]

  return { isDesktop, isTablet, isMobile, devices, onReachMeBtnClick }
}
