
import { MacWindowProps } from '../../../shared/components/MacWindow'

export interface ExperienceProps {
  detailsWindow?: MacWindowProps
  items: Array<ExperienceItem>
}

export interface UseExperienceContentProvides {
  hasItems: boolean
  sortedItems: Array<ExperienceItem>
}

export interface ExperienceItem {
  companyName: string
  companyWebsitePath: string
  dateFrom: string
  dateTo: string
  description: string
  descriptionExpanded?: string
  hasDivider?: boolean
  id: string
  roles: Array<string>
  order?: number
}
