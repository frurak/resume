import { IEventBus } from '../../../../core/services/event-bus'

import { DeviceType } from '../../../shared/store/contracts'
import { PageContent } from '../../../contracts/page'

import { ExperienceProps } from '../../components/Experience'

export interface InformationViewProps extends DeviceType {
}

export interface UseInformationViewProvides extends DeviceType, PageContent<ExperienceProps> {
  eventBus?: IEventBus
}
