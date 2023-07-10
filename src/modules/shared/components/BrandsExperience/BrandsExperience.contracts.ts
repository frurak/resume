
export interface BrandsExperienceProps {
  heading: string
  items: Array<BrandExperienceItemData>
}

export interface UseBrandsExperienceContentProvides {
}

export interface BrandExperienceItemData {
  label: string
  target?: string
}
