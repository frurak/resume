
export interface ExperienceProps {
  items: Array<ExperienceItem>
}

export interface UseExperienceContentProvides {

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
}
