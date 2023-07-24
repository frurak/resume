import { IEventBus } from '../../../../core/services/event-bus'

import { DeviceType } from '../../../shared/store/contracts'
import { PageContent } from '../../../contracts/page'

import { ExperienceProps } from '../../components/Experience'
import { FactsNumbersProps } from '../../components/FactsNumbers'

export interface InformationViewProps extends DeviceType {
}

export interface UseInformationViewProvides extends DeviceType, PageContent<InformationViewPageContent> {
  eventBus?: IEventBus
}

export interface InformationViewPageContent {
  experienceItems?: ExperienceProps
  numerical?: FactsNumbersProps
}
