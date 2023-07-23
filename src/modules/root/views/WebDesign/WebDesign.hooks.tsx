import React from 'react'

import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import CustomHeading from '../../../dsl/Heading/Heading'
import CustomButton from '../../../dsl/Button/Button'
import {
  DeviceMockUp
} from '../../../shared/components/Device'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/events/redirect-linkedin'

import DevicesCarousel from '../../components/DevicesCarousel/DevicesCarousel'
import DeviceMockup from '../../components/DeviceMockup/DeviceMockup'
import MobilesCarousel from '../../components/MobilesCarousel/MobilesCarousel'

import {
  UseWebDesignViewContentProvides
} from './WebDesign.contracts'

export const buildWebDesignTemplate = (props: UseWebDesignViewContentProvides) => {
  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  const descriptionOne = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.descriptionOne : undefined
  const descriptionTwo = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.descriptionTwo : undefined
  const mockups = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.mockups : undefined
  const brandsExperienceItems = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.experienceItems : undefined
  const uiCarousel = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.uiCarousel : undefined

  const _device = (props.isDesktop || props.isTablet) ? DeviceMockUp.Desktop : DeviceMockUp.Mobile

  return (
    <div className="WebDesignView">
      {/*Intro section*/}
      { descriptionOne &&
        <div className="WebDesignView__design-intro-section container">
          <div className="view-heading">
            <CustomHeading content="UI & UX Design"
                           classNames={['h1']} />
            <CustomButton label={ 'Reach me out' }
                          classNames={[props.isMobile ? 'w-100' : '']}
                          onClick={ onReachMeBtnClick } />
          </div>

          { (descriptionOne.descriptionLeft || descriptionOne.descriptionRight) &&
            <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
              { descriptionOne.descriptionLeft && <CustomParagraph content={ descriptionOne.descriptionLeft } /> }
              { descriptionOne.descriptionRight &&  <CustomParagraph content={ descriptionOne.descriptionRight } /> }
            </div>
          }
        </div>
      }

      { mockups && mockups.items &&
        <div className="WebDesignView__mobiles-carousel-section container-fluid">
          <MobilesCarousel items={ mockups.items } />
        </div>
      }

      { descriptionTwo &&
        <div className="WebDesignView__mobile-mockups-section container">
          <DeviceMockup description={ descriptionTwo } />
        </div>
      }

      { uiCarousel &&
        <div className={`WebDesignView__carousel-mockups-section container ${ uiCarousel.items[_device].length === 1 ? '--single-el-carousel' : '' }`}>
          <DevicesCarousel { ...uiCarousel } />
        </div>
      }

      {/*Brands Experience section*/}
      { brandsExperienceItems &&
        <div className="WebDesignView__brands-experience-section container">
          <BrandsExperience heading="Brands Experience" { ...brandsExperienceItems } />
        </div>
      }
    </div>
  )
}
