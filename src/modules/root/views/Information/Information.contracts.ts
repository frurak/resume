import { DeviceType } from '../../../shared/store/contracts'
import { AbstractViewProvidesOutput } from '../../../shared/abstract/view-meta'

export interface InformationViewProps extends DeviceType {
}

export interface UseInformationViewProvides extends DeviceType, AbstractViewProvidesOutput {
}
