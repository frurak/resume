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

  const hasItems = Array.isArray(props.items) && props.items.length > 0
  const canSort = hasItems ? props.items.every(item => !!item.order) : false
  const sortedItems = canSort
    ? [...props.items]
      .sort((a, b) => {
        return Number(a.order!) < Number(b.order!) ? 1 : -1
      })
    : props.items

  return (
    <div className="MobilesCarousel">
      <div className="MobilesCarousel__overlay"
           ref={ containerRef }>
        <div className="MobilesCarousel__inner">
          <div className="MobilesCarousel__devices">
            { hasItems && sortedItems.map((device, index) => (
              <Device key={ index } { ...device } />
            )) }

            <div className="MobilesCarousel__devices-background">
              { hasItems && sortedItems.map((device, index) => (
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
