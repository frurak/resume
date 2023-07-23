import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { Collection, Document, ImageCatalog } from '../../../../core/firebase'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'

import BaseTemplate from '../../../templates/Base/Base.template'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { buildWebDesignTemplate } from './WebDesign.hooks'
import { WebDesignPageContent, WebDesignViewProps } from './WebDesign.contracts'

/**
 * @see useAbstractViewProvides
 * @see WebDesignViewProps
 */
const WebDesignView = (props: WebDesignViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile,
    fetchAndStoreImages, fetchAndStoreMultiplePageContent, setLoading, retrieveDocumentFromState
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  const getPageContent = (): WebDesignPageContent => {
    return {
      mockups: retrieveDocumentFromState(Collection.WebDesign, Document.Mockups, ImageCatalog.WebDesign),
      uiCarousel: retrieveDocumentFromState(Collection.WebDesign, Document.UiCarousel, ImageCatalog.WebDesign, true),
      descriptionOne: retrieveDocumentFromState(Collection.WebDesign, Document.DescriptiveOne),
      descriptionTwo: retrieveDocumentFromState(Collection.WebDesign, Document.DescriptiveTwo),
      experienceItems: retrieveDocumentFromState(Collection.WebDesign, Document.BrandsExperience)
    }
  }

  const _init = async (): Promise<void> => {
    await fetchAndStoreImages(ImageCatalog.WebDesign)
    await fetchAndStoreMultiplePageContent([
      {
        collectionName: Collection.WebDesign,
        documentName: Document.Mockups
      },
      {
        collectionName: Collection.WebDesign,
        documentName: Document.DescriptiveOne
      },
      {
        collectionName: Collection.WebDesign,
        documentName: Document.DescriptiveTwo
      },
      {
        collectionName: Collection.WebDesign,
        documentName: Document.BrandsExperience
      },
      {
        collectionName: Collection.WebDesign,
        documentName: Document.UiCarousel
      }
    ])
  }

  useEffect(() => {
    setLoading!(true)
    _init()
      .catch((e: Error) => console.error(e))
      .finally(() => setLoading!(false))
  }, [])

  const slots = {
    main: {
      node: buildWebDesignTemplate({
        eventBus,
        isDesktop,
        isTablet,
        isMobile,
        getPageContent
      }),
      classNames: []
    }
  }

  return (
    <BaseTemplate
      slots={ slots }
      meta={ viewConfig ? viewConfig.meta : undefined }
    />
  )
}

export default WebDesignView
