import React  from 'react'

import CustomButton from '../../../dsl/Button/Button'
import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/events/redirect-linkedin'

import BrandingItemsList from '../../components/BrandingItemsList/BrandingItemsList'

import { BuildBrandingTemplateProps } from './Branding.contracts'

/**
 * Builds template for view
 */
export const buildBrandingTemplate = (props: BuildBrandingTemplateProps): React.ReactNode => {
  const pageContent = props.getPageContent()
  const shouldRenderList = Array.isArray(pageContent.items) && pageContent.items.length > 0

  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  return (
    <div className="BrandingView">
      { shouldRenderList && <BrandingItemsList { ...pageContent } />}

      <CustomButton label={ 'Reach me out' }
                    classNames={['mt-5', props.isMobile ? 'w-100' : '']}
                    onClick={ onReachMeBtnClick } />

      <BrandsExperience heading="Brands Experience"
                        items={ props.experienceItems } />
    </div>
  )
}
