import React, { useRef } from 'react'

import CustomHeading from '../../../dsl/Heading/Heading'
import CustomButton from '../../../dsl/Button/Button'
import Device from '../../../shared/components/Device/Device'

import { MobilesCarouselProps } from './MobilesCarousel.contracts'
import { useMobilesCarousel } from './MobilesCarousel.hooks'

/**
 * @see useMobilesCarousel
 * @see MobilesCarouselProps
 */
const MobilesCarousel = (props: MobilesCarouselProps) => {
  const containerRef = useRef(null)
  const { isDesktop, isTablet, isMobile, onReachMeBtnClick } = useMobilesCarousel(props)

  const hasDevices = Array.isArray(props.items) && props.items.length > 0

  const sortedDevices = hasDevices
    ? props.items.sort((a, b) => (a.order && b.order) && a.order > b.order ? 1 : -1)
    : []

  return (
    <div className="MobilesCarousel">
      <div className="MobilesCarousel__overlay"
           ref={ containerRef }>
        <div className="MobilesCarousel__inner">
          <div className="MobilesCarousel__devices">
            { hasDevices && sortedDevices.map((device, index) => (
              <Device key={ index } { ...device } />
            )) }

            <div className="MobilesCarousel__devices-background">
              { hasDevices && sortedDevices.map((device, index) => (
                <Device key={ index } { ...device } />
              )) }
            </div>
          </div>

          <div className="MobilesCarousel__content">
            <CustomHeading content="User<br/>Engaging<br/>Design"
                           renderAsHtml={ true }
                           level="h2"
                           classNames={['h1']} />

            <CustomButton label={ 'Reach me out' }
                          classNames={[isMobile ? 'w-100' : '']}
                          onClick={ onReachMeBtnClick } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobilesCarousel
