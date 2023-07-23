
import { IEventBus } from '../../../../core/services/event-bus'

import { BrandsExperienceProps } from '../../../shared/components/BrandsExperience'
import { DeviceProps } from '../../../shared/components/Device'
import { DeviceType } from '../../../shared/store/contracts'
import { PageContent, PageDescriptiveContent } from '../../../contracts/page'

import { DevicesResponsive } from '../../components/DevicesCarousel'

export interface WebDesignViewProps {}

export interface UseWebDesignViewContentProvides extends DeviceType, PageContent<WebDesignPageContent> {
  eventBus?: IEventBus
}

export interface WebDesignPageContent {
  descriptionOne?: PageDescriptiveContent
  descriptionTwo?: PageDescriptiveContent
  mockups?: MockupsProps
  experienceItems?: Pick<BrandsExperienceProps, 'items'>
  uiCarousel?: DeviceCarouselProps
}

export interface MockupsProps {
  items: Array<DeviceProps>
}

export interface DeviceCarouselProps {
  items: DevicesResponsive<Array<DeviceProps>>
}

export interface CarouselWidthData {
  width: number
  offset: number
  elementsCount: number
}

export enum CarouselNavi {
  Next = 'next',
  Prev = 'prev'
}
