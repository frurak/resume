import React, { useEffect, useRef, useState } from 'react'
import { useInjection } from 'inversify-react'

import { exampleBrandingBrandsExperienceItems } from '../../../../dev-utils/faker/branding.faker'
import { Collection, Document, ImageCatalog } from '../../../../core/firebase'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'

import BaseTemplate from '../../../templates/Base/Base.template'
import { FirebaseDocuments, getFirebaseDocuments } from '../../../shared/helpers/firebase-get-document'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { BrandingItemData } from '../../components/BrandingItemsList'

import { buildBrandingTemplate } from './Branding.hooks'
import { BrandingViewProps } from './Branding.contracts'

/**
 * @see useBrandingView
 * @see BrandingViewProps
 */
const BrandingView = (props: BrandingViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile, firebaseService,
    hasCachedImages, hasCachedDocuments, fetchAndStoreImages, fetchAndStorePageContent, setLoading
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  // TODO: Move to firebase
  const [experienceItems, setExperienceItems] = useState(exampleBrandingBrandsExperienceItems())

  /** Prevents useEffect from fetching 2 times */
  const imagesFetched = useRef(false)
  const pageContentDocsFetched = useRef(false)

  const _fetchAndStoreImages = async (): Promise<void> => {
    if (fetchAndStoreImages) {
      await fetchAndStoreImages(ImageCatalog.Branding)
    }
  }

  const _fetchAndStorePageContent = async (): Promise<void> => {
    if (fetchAndStorePageContent) {
      await fetchAndStorePageContent(Collection.Branding, Document.PageContent)
    }
  }

  useEffect(() => {
    if (hasCachedImages && !hasCachedImages(ImageCatalog.Branding) && !imagesFetched.current) {
      setLoading!(true)

      _fetchAndStoreImages()
        .finally(() => setLoading!(false))

      imagesFetched.current = true
    }

    if (hasCachedDocuments && !hasCachedDocuments(Collection.Branding, Document.PageContent) && !pageContentDocsFetched.current) {
      setLoading!(true)

      _fetchAndStorePageContent()
        .finally(() => setLoading!(false))

      pageContentDocsFetched.current = true
    }
  }, [])

  const getPageContent = (): FirebaseDocuments<Array<BrandingItemData>> => {
    return getFirebaseDocuments<Array<BrandingItemData>>(
      firebaseService,
      Collection.Branding,
      Document.PageContent,
      ImageCatalog.Branding
    )
  }

  const slots = {
    main: {
      node: buildBrandingTemplate({
        eventBus,
        isDesktop,
        isTablet,
        isMobile,
        experienceItems,
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
