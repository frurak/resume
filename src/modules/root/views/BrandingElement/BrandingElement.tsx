import React from 'react'
import { useParams } from 'react-router-dom'

import { BrandingItemData } from '../../components/BrandingItemsList'

// [Work in progress]
const BrandingElement = () => {
  const { brandingElementId } = useParams()

  // TODO: Finish view
  // TODO: Build recurrent registry from routesConfig and handle invalid URLS!
  // const brandingItemsData = exampleBranding()
  // const selectedElement: BrandingItemData | undefined = brandingItemsData.items.find(item => item.id === brandingElementId)

  return (
    <main className="BrandingElement container">
      {/*{ selectedElement && selectedElement.caption }*/}
    </main>
  )
}

export default BrandingElement
