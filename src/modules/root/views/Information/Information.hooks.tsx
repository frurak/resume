
import React from 'react'

import CustomButton from '../../../dsl/Button/Button'
import CustomHeading from '../../../dsl/Heading/Heading'
import CustomImage from '../../../dsl/Image/Image'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import { MacWindowProps, MacWindowTheme } from '../../../shared/components/MacWindow'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/events/redirect-linkedin'

import Experience from '../../components/Experience/Experience'
import FactsNumbers from '../../components/FactsNumbers/FactsNumbers'
import Knowledge from '../../components/Knowledge/Knowledge'

import { UseInformationViewProvides } from './Information.contracts'

/**
 * Builds template for view
 */
export const buildInformationTemplate = (props: UseInformationViewProvides): React.ReactNode => {
  // TODO: Move image to Firestore
  const headerImageSrc = require('../../../../assets/img/me.jpg')

  const pageContent = props.getPageContent()
  const shouldRenderExperience = pageContent && pageContent.experienceItems && Array.isArray(pageContent.experienceItems.items) && pageContent.experienceItems.items.length > 0
  const shouldRenderDetailsWindow = pageContent && pageContent.numerical && Array.isArray(pageContent.numerical.items) && pageContent.numerical.items.length > 0

  const experienceDetailsWindow: MacWindowProps | undefined = shouldRenderDetailsWindow ? {
    content: <FactsNumbers { ...pageContent.numerical! } />,
    theme: MacWindowTheme.DarkReverse
  } : undefined

  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  const getAge = (): string => {
    const nowTime = Date.now()
    const birthTime = new Date('12.03.1999').getTime()

    // Intentionally skipped calculating extra day each 4 years: FIXME later
    return Math.ceil((nowTime - birthTime) / (1000 * 60 * 60 * 24 * 365)).toString()
  }

  return (
    <div className="InformationView">
      {/*Hero section */}
      <div className="InformationView__hero-section">
        <div className="InformationView__left">
          <CustomParagraph content="Learn quick, go beyond." classNames={['h2']} />

          <div className="InformationView__info-header">
            <CustomHeading content={ `${ getAge() } yo.<br>Frontend Dev<br>& Graphics<br>Designer` }
                           level="h1"
                           renderAsHtml={ true }
                           classNames={['InformationView__heading']} />

            <CustomParagraph content={ 'previously: Ecommerce Manager' }
                             classNames={['InformationView__subheading']} />

            <CustomButton label={ 'Reach me out' }
                          classNames={['mt-5', props.isMobile ? 'w-100' : '']}
                          onClick={ onReachMeBtnClick } />
          </div>
        </div>

        <div className="InformationView__right">
          <CustomImage src={ headerImageSrc } alt={ 'Filip Rurak' } />
        </div>
      </div>

      {/* Experience section */}
      { shouldRenderExperience &&
        <div className="InformationView__experience-section">
          <Experience items={ pageContent.experienceItems!.items } detailsWindow={ experienceDetailsWindow } />
        </div>
      }

      {/* Knowledge section */}
      <div className="InformationView__knowledge-section">
        <Knowledge />
      </div>
    </div>
  )
}
