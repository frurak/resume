import { IEventBus } from '../../../../core/services/event-bus'

import { BrandsExperienceProps } from '../../../shared/components/BrandsExperience'
import { DeviceType } from '../../../shared/store/contracts'
import { PageContent, PageDescriptiveContent } from '../../../contracts/page'

import { FactsNumbersProps } from '../../components/FactsNumbers'

export interface WebDevelopmentViewProps {}

export interface UseWebDevelopmentViewContentProvides extends DeviceType, PageContent<WebDevelopmentPageContent> {
  eventBus?: IEventBus
}

export interface WebDevelopmentPageContent {
  descriptionOne?: PageDescriptiveContent
  descriptionTwo?: PageDescriptiveContent
  numerical?: FactsNumbersProps
  experienceItems?: Pick<BrandsExperienceProps, 'items'>
}
