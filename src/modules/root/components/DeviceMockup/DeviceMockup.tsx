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

  return (
    <div className="DeviceMockup"
         ref={ (isDesktop || isTablet) ? mockUpsContainerRef : null }
         style={{ height: mockupSectionHeight }}>
      <div className="DeviceMockup__overlay">
        { props.description &&
          <div className="DeviceMockup__left">
            { props.description.heading &&
              <CustomHeading content={ props.description.heading }
                             renderAsHtml={ true }
                             level="h2"
                             classNames={['h1']} />
            }

            { props.description.descriptionLeft &&
              <div className="mockups-description"
                   ref={ isMobile ? mockUpsContainerRef : null }>
                <CustomParagraph content={ props.description.descriptionLeft } />
              </div>
            }

            { (isDesktop || isTablet) &&
              <CustomButton label={ 'Reach me out' }
                            classNames={[ isMobile ? 'w-100' : '' ]}
                            onClick={ onReachMeBtnClick } />
            }
          </div>
        }

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
