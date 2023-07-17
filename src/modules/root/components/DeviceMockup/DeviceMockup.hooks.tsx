import React, { useEffect, useRef, useState } from 'react'
import { useInjection } from 'inversify-react'

import { DEVICE_BACKGROUND_SELECTOR } from '../../../shared/components/Device/Device'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/redirect-linkedin'
import { ScrollableOptions, ScrollableSpeed } from '../../../shared/components/Device'
import { useAbstractDeviceContentProvides } from '../../../shared/abstract/device'

import { ReactComponent as NaviBackComponent } from '../../views/WebDesign/assets/pharmaceris/navi-back.svg'
import { ReactComponent as PharmacerisHeader } from '../../views/WebDesign/assets/pharmaceris/header.svg'
import { ReactComponent as PharmacerisPageContent } from '../../views/WebDesign/assets/pharmaceris/page-content.svg'

import { DeviceMockupProps, UseDeviceMockupContentProvides } from './DeviceMockup.contracts'

export const useDeviceMockup = (props: DeviceMockupProps): UseDeviceMockupContentProvides => {
  /**
   * @private
   */
  const _SCROLL_BLUR_SELECTOR = 'pharmaceris-blur'

  /**
   * @private
   */
  const _DEFAULT_MOCKUPS_SECTION_HEIGHT = 'auto'

  /**
   * @private
   */
  const _eventBus: IEventBus = useInjection(EventbusType)

  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()

  const mockUpsContainerRef = useRef(null)

  const [mockupSectionHeight, setMockupSectionHeight] = useState(_DEFAULT_MOCKUPS_SECTION_HEIGHT)
  const [customElements,  setCustomElements] = useState([
    {
      id: 'pharmaceris-header',
      component: <PharmacerisHeader />,
      styles: {
        padding: '0',
        width: '100%',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)'
      },
      topPosition: 0,
      leftPosition: 0,
      zIndex: 4,
      scrollable: undefined
    },
    {
      id: 'pharmaceris-page-content',
      component: <PharmacerisPageContent />,
      styles: {
        padding: '0'
      },
      topPosition: isMobile ? 400 : 500,
      leftPosition: 0,
      zIndex: 3,
      scrollable: {
        speed: '0.75' as ScrollableSpeed
      }
    },
    {
      id: 'pharmaceris-page-content',
      component: <NaviBackComponent />,
      styles: {
        padding: '0',
        width: isMobile ? '2rem' : '2.5rem',
        height: isMobile ? '2rem' : '2.5rem',
        boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px'
      },
      topPosition: isMobile ? 90 : 115,
      leftPosition: 12,
      zIndex: 5
    },
    {
      id: 'pharmaceris-blur',
      component: <div></div>,
      classNames: [_SCROLL_BLUR_SELECTOR],
      styles: {
        padding: '0',
        width: '100%',
        minHeight: '300px',
        height: '100%',
        background: 'rgba(50, 63, 73, 0)',
        backdropFilter: 'blur(0px)'
      },
      topPosition: 0,
      leftPosition: 0,
      zIndex: 2
    }
  ])

  const onReachMeBtnClick = (): void => {
    if (_eventBus) {
      _eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  /**
   * Handles animation of customElements while scrolling
   * @private
   */
  const _handleMockupsScroll = (): void => {
    const _offset = mockUpsContainerRef.current ? (mockUpsContainerRef.current as HTMLElement).offsetTop : 0
    let _toAdd = (window.pageYOffset - _offset) * -1.1

    setCustomElements(prevState => {
      return prevState.map(element => {
        if (element.classNames && element.classNames.includes(_SCROLL_BLUR_SELECTOR)) {
          return {
            ...element,
            styles: {
              ...element.styles,
              backdropFilter: `blur(${ _toAdd * (isMobile ? -0.02 : -0.008) }px)`,
              background: `rgba(50, 63, 73, ${ _toAdd * (isMobile ? -0.003 : -0.0025) })`
            }
          }
        }
        if (element.scrollable && mockUpsContainerRef.current && (mockUpsContainerRef.current as HTMLElement).getBoundingClientRect().top < 0) {
          _toAdd = _toAdd * Number((element.scrollable as ScrollableOptions).speed)
          return {
            ...element,
            styles: {
              ...element.styles,
              transform: `translateY(${ _toAdd }px)`
            }
          }
        }
        return element
      })
    })
  }

  /**
   * TODO: Optimize height resize on big screens like 4K
   * @private
   */
  const _calculateMockupsSectionHeight = (resize: boolean = false): void => {
    const mockUpsContainer = mockUpsContainerRef.current

    if (mockUpsContainer) {
      const containerHeight = (mockUpsContainer as HTMLElement).getBoundingClientRect().height
      const device = (mockUpsContainer as HTMLElement).querySelector(`.${ DEVICE_BACKGROUND_SELECTOR }`)

      setMockupSectionHeight((prevState) => {
        const defaultReturn = device ? `${ containerHeight + device.scrollHeight - device.getBoundingClientRect().height }px` : _DEFAULT_MOCKUPS_SECTION_HEIGHT

        if (prevState === 'auto') {
          return defaultReturn
        } else {
          return resize
            ? `${ parseFloat(prevState) }px`
            : defaultReturn
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', _handleMockupsScroll)

    if (mockupSectionHeight === _DEFAULT_MOCKUPS_SECTION_HEIGHT) {
      _calculateMockupsSectionHeight()
    }

    window.addEventListener('resize', () => {
      _calculateMockupsSectionHeight(true)
    })

    // Remove listeners
    return () => {
      window.removeEventListener('scroll', _handleMockupsScroll)
      window.removeEventListener('resize', () => {
        _calculateMockupsSectionHeight(true)
      })
    }
  }, [])

  return { isDesktop, isTablet, isMobile, customElements, mockUpsContainerRef, mockupSectionHeight, onReachMeBtnClick }
}
