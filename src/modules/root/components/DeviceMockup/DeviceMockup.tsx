import React from 'react'

import CustomHeading from '../../../dsl/Heading/Heading'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import CustomButton from '../../../dsl/Button/Button'
import Device from '../../../shared/components/Device/Device'
import { DeviceMockUp } from '../../../shared/components/Device'

import { DeviceMockupProps } from './DeviceMockup.contracts'
import { useDeviceMockup } from './DeviceMockup.hooks'

/**
 * @see useDeviceMockup
 * @see DeviceMockupProps
 */
const DeviceMockup = (props: DeviceMockupProps) => {
  const {
    isDesktop, isTablet, isMobile, customElements, mockUpsContainerRef, mockupSectionHeight, onReachMeBtnClick
  } = useDeviceMockup(props)

  // TODO: Remove me
  const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'
  const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'
  //

  return (
    <div className="DeviceMockup"
         ref={ (isDesktop || isTablet) ? mockUpsContainerRef : null }
         style={{ height: mockupSectionHeight }}>
      <div className="DeviceMockup__overlay">
        <div className="DeviceMockup__left">
          <CustomHeading content="Functional<br/>User Interfaces<br/>with<br/>Seamless UX"
                         renderAsHtml={ true }
                         level="h2"
                         classNames={['h1']} />

          <div className="mockups-description"
               ref={ isMobile ? mockUpsContainerRef : null }>
            <CustomParagraph content={ text1 } />
            { (isDesktop || isTablet) &&
              <CustomButton label={ 'Reach me out' }
                            classNames={[ isMobile ? 'w-100' : '' ]}
                            onClick={ onReachMeBtnClick } />
            }
          </div>
        </div>
        <div className="DeviceMockup__right">
          <Device device={ DeviceMockUp.Mobile }
                  customElements={ customElements }
                  image={ require('../../../../assets/design/pharmaceris/product-page.jpg') }
                  imageClasses={[]} />
        </div>
      </div>
    </div>
  )
}

export default DeviceMockup
