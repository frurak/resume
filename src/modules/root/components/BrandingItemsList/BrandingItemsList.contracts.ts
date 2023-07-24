import { LinkProps } from '../../../dsl/Link'

export interface BrandingItemsListProps {
  items: Array<BrandingItemData>
}

export interface BrandingItemData {
  caption: string
  captionDetails?: string
  longDescription?: string
  id: string
  image: string
  hasOwnPage?: boolean
  targetLink?: Pick<LinkProps, 'target'>
  order?: number
}

export interface UseBrandingItemsListContentProvides {
}
