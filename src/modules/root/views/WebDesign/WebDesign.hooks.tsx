import React from 'react'

import { exampleWebDesignBrandsExperienceItems } from '../../../../dev-utils/faker/web-design'

import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import CustomHeading from '../../../dsl/Heading/Heading'
import CustomButton from '../../../dsl/Button/Button'
import {
  DeviceMockUp
} from '../../../shared/components/Device'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/redirect-linkedin'
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import DevicesCarousel from '../../components/DevicesCarousel/DevicesCarousel'
import { DevicesCarouselProps } from '../../components/DevicesCarousel'
import DeviceMockup from '../../components/DeviceMockup/DeviceMockup'
import MobilesCarousel from '../../components/MobilesCarousel/MobilesCarousel'

import {
  UseWebDesignViewContentProvides,
  WebDesignViewProps
} from './WebDesign.contracts'

/**
 * Web Design view logic
 */
export const useWebDesignView = (props: WebDesignViewProps): UseWebDesignViewContentProvides => {
  const { viewConfig, eventBus, isDesktop, isTablet, isMobile } = useAbstractViewProvides()

  return { viewConfig, eventBus, isDesktop, isTablet, isMobile }
}

export const buildWebDesignTemplate = (props: UseWebDesignViewContentProvides) => {
  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  // TODO: Remove me
  const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'
  const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'

  // TODO: Remove me
  const brandsExperienceItems = exampleWebDesignBrandsExperienceItems()

  const _device = (props.isDesktop || props.isTablet) ? DeviceMockUp.Desktop : DeviceMockUp.Mobile

  const carouselProps: DevicesCarouselProps = {
    devices: {
      desktop: [
        {
          image: require('../../../../assets/design/backmarket/backmarket.jpg')
        },
        {
          image: require('../../../../assets/design/backmarket/backmarket.jpg')
        }
      ],
      mobile: [
        {
          image: require('../../../../assets/design/backmarket/backmarket-mobile.jpg')
        }
      ]
    }
  }

  return (
    <div className="WebDesignView">
      {/*Intro section*/}
      <div className="WebDesignView__design-intro-section container">
        <div className="view-heading">
          <CustomHeading content="UI & UX Design"
                         classNames={['h1']} />
          <CustomButton label={ 'Reach me out' }
                        classNames={[props.isMobile ? 'w-100' : '']}
                        onClick={ onReachMeBtnClick } />
        </div>

        <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
          <CustomParagraph content={ text1 } />
          <CustomParagraph content={ text2 } />
        </div>
      </div>

      <div className="WebDesignView__mobiles-carousel-section container-fluid">
        <MobilesCarousel />
      </div>

      <div className="WebDesignView__mobile-mockups-section container">
        <DeviceMockup />
      </div>

      <div className={`WebDesignView__carousel-mockups-section container ${ carouselProps.devices[_device].length === 1 ? '--single-el-carousel' : '' }`}>
        <DevicesCarousel { ...carouselProps } />
      </div>

      {/*Brands Experience section*/}
      <div className="WebDesignView__brands-experience-section container">
        <BrandsExperience heading="Brands Experience"
                          items={ brandsExperienceItems } />
      </div>
    </div>
  )
}
