import React from 'react'
import { useParams } from 'react-router-dom'
import { exampleBranding } from '../../../../dev-utils/faker/branding.faker'
import { BrandingItemData } from '../../components/BrandingItemsList'

const BrandingElement = () => {
  const { brandingElementId } = useParams()

  // TODO: Fetch by :id from redux instead filtering
  const brandingItemsData = exampleBranding()
  const selectedElement: BrandingItemData | undefined = brandingItemsData.items.find(item => item.id === brandingElementId)

  // TODO: Build recurrent registry from routesConfig and handle invalid URLS!!!

  return (
    <main className="BrandingElement container">
      { selectedElement && selectedElement.caption }
    </main>
  )
}

export default BrandingElement
