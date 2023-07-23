import React, { useRef } from 'react'

import { ReactComponent as NaviArrow } from '../../../../assets/icons/NaviArrowIcon.svg'

import Device from '../../../shared/components/Device/Device'
import { DeviceMockUp } from '../../../shared/components/Device'

import { CarouselNavi } from '../../views/WebDesign/WebDesign.contracts'

import { DevicesCarouselProps } from './DevicesCarousel.contracts'
import { useDevicesCarousel } from './DevicesCarousel.hooks'

/**
 * @see useDevicesCarousel
 * @see DevicesCarouselProps
 */
const DevicesCarousel = (props: DevicesCarouselProps) => {
  const carouselContainerRef = useRef(null)
  const carouselDeviceRef = useRef(null)
  const carouselElementsWrapperRef = useRef(null)

  const {
    isPrevNaviDisabled, isNextNaviDisabled, hasNavi, isDesktop, isTablet, isMobile,
    getCarouselWidth, onCarouselNaviClick
  } = useDevicesCarousel(props, carouselContainerRef, carouselDeviceRef, carouselElementsWrapperRef)

  const _device = (isDesktop || isTablet) ? DeviceMockUp.Desktop : DeviceMockUp.Mobile

  return (
    <div className="DeviceCarousel w-100 h-100"
         ref={ carouselContainerRef }>

      { hasNavi &&
        <div className="carousel-navigation">
          <span className={`navi-arrow navi-arrow-prev ${ isPrevNaviDisabled ? '--disabled' : '' }`}
                onClick={ e => onCarouselNaviClick(e, CarouselNavi.Prev) }>
            <NaviArrow />
          </span>

          <span className={`navi-arrow navi-arrow-next ${ isNextNaviDisabled ? '--disabled' : '' }`}
                onClick={ e => onCarouselNaviClick(e, CarouselNavi.Next) }>
            <NaviArrow />
          </span>
        </div>
      }

      <div className="carousel-devices-wrapper"
           style={{ width: getCarouselWidth() ? getCarouselWidth()!.width * props.items[_device].length : '100%' }}>

        <div className="carousel-devices-track"
             ref={ carouselElementsWrapperRef }>
          { props.items && props.items[_device].length > 0 &&
            props.items[_device]
              .map((device, index) => (
                <Device key={ index }
                        device={ _device }
                        DOMRef={ index === 0 ? carouselDeviceRef : undefined }
                        DOMElStyles={{ margin: `0px ${ getCarouselWidth() ? (getCarouselWidth()!.offset / 2)+'px' : '0px' }` }}
                        image={ device.image } />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DevicesCarousel
