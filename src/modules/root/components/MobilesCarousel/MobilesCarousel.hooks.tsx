import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { useAbstractDeviceContentProvides } from '../../../shared/abstract/device'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/events/redirect-linkedin'

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

  return { isDesktop, isTablet, isMobile, onReachMeBtnClick }
}
