import React from 'react'

import { BrandingItemsListProps } from './BrandingItemsList.contracts'
import { useBrandingItems } from './BrandingItemsList.hooks'
import BrandingItem from './partials/BrandingItem'

/**
 * @see useBrandingItems
 * @see BrandingItemsListProps
 */
const BrandingItemsList = (props: BrandingItemsListProps) => {
  const {} = useBrandingItems(props)

  return (
    <div className="BrandingItemsList">
      { props.items.map(item => (
        <BrandingItem key={ item.id } { ...item } />
      )) }
    </div>
  )
}

export default BrandingItemsList
