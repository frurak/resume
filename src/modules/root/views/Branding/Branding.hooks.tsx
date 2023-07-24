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
  const hasBrandingItems = pageContent && pageContent.brandingItems && Array.isArray(pageContent.brandingItems.items) && pageContent.brandingItems.items.length > 0
  const hasExperienceItems = pageContent && pageContent.experienceItems && Array.isArray(pageContent.experienceItems.items) && pageContent.experienceItems.items.length > 0

  const _canSort = hasBrandingItems ? pageContent!.brandingItems!.items.every(item => !!item.order) : false
  const sortedBrandingItems = _canSort
    ? {
      items: [...pageContent!.brandingItems!.items]
        .sort((a, b) => {
          return Number(a.order!) > Number(b.order!) ? 1 : -1
        })
    }
    : pageContent!.brandingItems

  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  return (
    <div className="BrandingView">
      { hasBrandingItems && <BrandingItemsList { ...sortedBrandingItems! } />}

      <CustomButton label={ 'Reach me out' }
                    classNames={['mt-5', props.isMobile ? 'w-100' : '']}
                    onClick={ onReachMeBtnClick } />

      { hasExperienceItems &&
        <BrandsExperience heading="Brands Experience"
                          items={ pageContent.experienceItems!.items } />
      }
    </div>
  )
}
