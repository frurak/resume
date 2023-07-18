import { DeviceType } from '../../../shared/store/contracts'
import { AbstractViewProvidesOutput } from '../../../shared/abstract/view'

export interface InformationViewProps extends DeviceType {
}

export interface UseInformationViewProvides extends DeviceType, AbstractViewProvidesOutput {
}
