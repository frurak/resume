import React from 'react'


import { exampleBranding, exampleBrandingBrandsExperienceItems } from '../../../../dev-utils/faker/branding.faker'

import CustomButton from '../../../dsl/Button/Button'
import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/redirect-linkedin'
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import BrandingItemsList from '../../components/BrandingItemsList/BrandingItemsList'

import { BrandingViewProps, UseBrandingViewProvides } from './Branding.contracts'

/**
 * Branding view logic
 */
export const useBrandingView = (props: BrandingViewProps): UseBrandingViewProvides => {
  const { viewConfig, isDesktop, isTablet, isMobile } = useAbstractViewProvides()

  // TODO: Remove me
  const brandingItemsData = exampleBranding()
  const brandsExperienceItems = exampleBrandingBrandsExperienceItems()
  //

  return { viewConfig, isDesktop, isTablet, isMobile, brandingItemsData, brandsExperienceItems }
}

/**
 * Builds template for view
 */
export const buildBrandingTemplate = (props: UseBrandingViewProvides): React.ReactNode => {
  const shouldRenderList = Array.isArray(props.brandingItemsData.items) && props.brandingItemsData.items.length > 0

  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  return (
    <div className="BrandingView">
      { shouldRenderList && <BrandingItemsList { ...props.brandingItemsData } />}

      <CustomButton label={ 'Reach me out' }
                    classNames={['mt-5', props.isMobile ? 'w-100' : '']}
                    onClick={ onReachMeBtnClick } />

      <BrandsExperience heading="Brands Experience"
                        items={ props.brandsExperienceItems } />
    </div>
  )
}
