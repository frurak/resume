
import { IEventBus } from '../../../../core/services/event-bus'

import { BrandsExperienceProps } from '../../../shared/components/BrandsExperience'
import { DeviceType } from '../../../shared/store/contracts'
import { PageContent } from '../../../contracts/page'

import { BrandingItemsListProps } from '../../components/BrandingItemsList'

export interface BrandingViewProps {}

export interface BuildBrandingTemplateProps extends DeviceType, PageContent<BrandingViewPageContent> {
  eventBus?: IEventBus
}

export interface BrandingViewPageContent {
  experienceItems?: Pick<BrandsExperienceProps, 'items'>
  brandingItems?: BrandingItemsListProps
}

export type BrandingExperienceItems = Pick<BrandsExperienceProps, 'items'>
