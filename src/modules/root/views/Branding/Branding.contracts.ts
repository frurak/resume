import { DeviceType } from '../../../shared/store/contracts'
import { AbstractViewProvidesOutput } from '../../../shared/abstract/view-meta'
import { BrandExperienceItemData } from '../../../shared/components/BrandsExperience'

import { BrandingItemsListProps } from '../../components/BrandingItemsList'

export interface BrandingViewProps {}

export interface UseBrandingViewProvides extends DeviceType, AbstractViewProvidesOutput {
  brandingItemsData: BrandingItemsListProps
  brandsExperienceItems: Array<BrandExperienceItemData>
}
