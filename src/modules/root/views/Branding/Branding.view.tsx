import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { Collection, Document, ImageCatalog } from '../../../../core/firebase'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'

import BaseTemplate from '../../../templates/Base/Base.template'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { BrandingItemsListProps } from '../../components/BrandingItemsList'

import { buildBrandingTemplate } from './Branding.hooks'
import { BrandingExperienceItems, BrandingViewPageContent, BrandingViewProps } from './Branding.contracts'

/**
 * @see useAbstractViewProvides
 * @see BrandingViewProps
 */
const BrandingView = (props: BrandingViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile,
    fetchAndStoreImages, fetchAndStoreMultiplePageContent, setLoading, retrieveDocumentFromState
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  const _initPage = async (): Promise<void> => {
    await fetchAndStoreImages(ImageCatalog.Branding)
    await fetchAndStoreMultiplePageContent([
      {
        collectionName: Collection.Branding,
        documentName: Document.PageContent
      },
      {
        collectionName: Collection.Branding,
        documentName: Document.BrandsExperience
      }
    ])
  }

  const getPageContent = (): BrandingViewPageContent => {
    return {
      brandingItems: retrieveDocumentFromState<BrandingItemsListProps>(Collection.Branding, Document.PageContent, ImageCatalog.Branding),
      experienceItems: retrieveDocumentFromState<BrandingExperienceItems>(Collection.Branding, Document.BrandsExperience)
    }
  }

  useEffect(() => {
    setLoading!(true)
    _initPage()
      .catch((e: Error) => console.error(e.message))
      .finally(() => setLoading!(false))
  }, [])

  const slots = {
    main: {
      node: buildBrandingTemplate({
        eventBus,
        isDesktop,
        isTablet,
        isMobile,
        getPageContent
      }),
      classNames: ['container']
    }
  }

  return (
    <BaseTemplate
      slots={ slots }
      meta={ viewConfig ? viewConfig.meta : undefined }
    />
  )
}

export default BrandingView
