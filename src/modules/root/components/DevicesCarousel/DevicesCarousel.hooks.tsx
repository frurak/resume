import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'

import { DeviceMockUp } from '../../../shared/components/Device'
import useStateWithCallback from '../../../shared/helpers/use-state-synchronous'
import { useAbstractDeviceContentProvides } from '../../../shared/abstract/device'

import { CarouselNavi, CarouselWidthData } from '../../views/WebDesign/WebDesign.contracts'

import { DevicesCarouselProps, UseDevicesCarouselContentProvides } from './DevicesCarousel.contracts'

export const useDevicesCarousel = (
  props: DevicesCarouselProps,
  carouselContainerRef: React.MutableRefObject<null>,
  carouselDeviceRef: React.MutableRefObject<null>,
  carouselElementsWrapperRef: React.MutableRefObject<null>
): UseDevicesCarouselContentProvides => {
  /**
   * @private
   */
  const _carouselScrollCount = useRef(0)

  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()

  const [isPrevNaviDisabled, setIsPrevNaviDisabled] = useStateWithCallback(true)
  const [isNextNaviDisabled, setIsNextNaviDisabled] = useStateWithCallback(false)
  const [hasNavi, setHasNavi] = useState(false)

  /**
   * Calculates dynamically carousel width and offset
   */
  const getCarouselWidth = (): CarouselWidthData | undefined => {
    if (carouselContainerRef && carouselContainerRef.current && carouselDeviceRef && carouselDeviceRef.current) {
      const containerWidth = (carouselContainerRef.current as HTMLElement).getBoundingClientRect().width
      const deviceWidth = (carouselDeviceRef.current as HTMLElement).getBoundingClientRect().width

      return {
        width: containerWidth,
        offset: containerWidth - deviceWidth,
        elementsCount: (isDesktop || isTablet) ? props.items.desktop.length : props.items.mobile.length
      }
    }

    return undefined
  }

  /**
   * Handles carousel navigation click
   */
  const onCarouselNaviClick = (e: React.MouseEvent, direction: string): MouseEventHandler<HTMLSpanElement> | undefined => {
    const canScroll = !!carouselElementsWrapperRef.current
    if (!canScroll) {
      return
    }

    setIsPrevNaviDisabled(false)
    setIsNextNaviDisabled(false)

    _carouselScrollCount.current = _carouselScrollCount.current + (direction === CarouselNavi.Next ? 1 : -1)

    if (_carouselScrollCount.current >= ((isDesktop || isTablet) ? props.items.desktop.length : props.items.mobile.length)) {
      _carouselScrollCount.current = _carouselScrollCount.current - 1
      return
    }

    if (_carouselScrollCount.current < 0) {
      _carouselScrollCount.current = _carouselScrollCount.current + 1
      return
    }

    const amountToScroll = getCarouselWidth() ? getCarouselWidth()!.width : 0;
    (carouselElementsWrapperRef.current! as HTMLElement).style.transform = `translateX(-${ _carouselScrollCount.current * amountToScroll }px)`

    _considerDisablingCarouselNavigation()
    return
  }

  /**
   * Considers disabling `prev` or `next` carousel navigation element
   * @private
   */
  const _considerDisablingCarouselNavigation = (): void => {
    if (_carouselScrollCount.current === ((isDesktop || isTablet) ? props.items.desktop.length : props.items.mobile.length) - 1) {
      setIsNextNaviDisabled(true)
    }
    if (_carouselScrollCount.current === 0) {
      setIsPrevNaviDisabled(true)
    }
  }

  useEffect(() => {
    // FIXME: This doesnt work in mobile
    setHasNavi(props.items[(isDesktop || isTablet) ? DeviceMockUp.Desktop : DeviceMockUp.Mobile].length > 1)
    setIsNextNaviDisabled(props.items[(isDesktop || isTablet) ? DeviceMockUp.Desktop : DeviceMockUp.Mobile].length === 1)

    window.addEventListener('resize', () => {
      getCarouselWidth()
    })

    return () => {
      window.removeEventListener('resize', () => {
        getCarouselWidth()
      })
    }
  },[])

  return {
    isPrevNaviDisabled, isNextNaviDisabled, hasNavi, isDesktop, isTablet, isMobile,
    getCarouselWidth, onCarouselNaviClick
  }
}
