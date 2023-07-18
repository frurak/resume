
import { IEventBus } from '../../../../core/services/event-bus'

import { DeviceType } from '../../../shared/store/contracts'
import { FirebaseDocuments } from '../../../shared/helpers/firebase-get-document'

import { BrandingItemData } from '../../components/BrandingItemsList'

export interface BrandingViewProps {}

export interface BuildBrandingTemplateProps extends DeviceType {
  eventBus?: IEventBus
  experienceItems: any[]
  getPageContent: () => FirebaseDocuments<Array<BrandingItemData>>
}
