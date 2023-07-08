
import React from 'react'

import { exampleExperience } from '../../../../dev-utils/faker/experience.faker'

import CustomButton from '../../../dsl/Button/Button'
import CustomHeading from '../../../dsl/Heading/Heading'
import CustomImage from '../../../dsl/Image/Image'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import Experience from '../../components/Experience/Experience'
import Knowledge from '../../components/Knowledge/Knowledge'

import { InformationViewProps } from './Information.contracts'

/**
 * Information view logic
 */
export const useInformationView = (props: InformationViewProps) => {
  const { viewConfig } = useAbstractViewProvides()

  return { viewConfig }
}

/**
 * Builds template for view
 */
export const buildInformationTemplate = (props: InformationViewProps): React.ReactNode => {
  const headerImageSrc = require('../../../../assets/img/me.jpg')

  // TODO: Remove me
  const experienceData = exampleExperience()

  const onReachMeBtnClick = () => {
    console.log('click')
  }

  const getAge = (): string => {
    const nowTime = Date.now()
    const birthTime = new Date('12.03.1999').getTime()

    // Intentionally skipped calculating extra day each 4 years: FIXME later
    return Math.ceil((nowTime - birthTime) / (1000 * 60 * 60 * 24 * 365)).toString()
  }

  return (
    <div className="InformationView">
      {/* Hero section */}
      {/*<div className="InformationView__hero-section">*/}
      {/*  <div className="InformationView__left">*/}
      {/*    <CustomParagraph content="Learn quick, go beyond." classNames={['h2']} />*/}

      {/*    <div className="InformationView__info-header">*/}
      {/*      <CustomHeading content={ `${ getAge() } yo.<br>Frontend Dev<br>& Graphics<br>Designer` }*/}
      {/*                     level="h1"*/}
      {/*                     renderAsHtml={ true }*/}
      {/*                     classNames={['InformationView__heading']} />*/}

      {/*      <CustomParagraph content={ 'previously: Ecommerce Manager' }*/}
      {/*                       classNames={['mt-5', 'InformationView__subheading']} />*/}

      {/*      <CustomButton label={ 'Reach me out' }*/}
      {/*                    classNames={['mt-5']}*/}
      {/*                    onClick={ onReachMeBtnClick } />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="InformationView__right">*/}
      {/*    <CustomImage src={ headerImageSrc } alt={ 'Filip Rurak' } />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Experience section */}
      <div className="InformationView__experience-section">
        {/*<Experience { ...experienceData } />*/}
      </div>

      {/* Knowledge section */}
      <div className="InformationView__knowledge-section">
        {/*<Knowledge />*/}
      </div>
    </div>
  )
}
