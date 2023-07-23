import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { Collection, Document } from '../../../../core/firebase'
import { EventbusType, IEventBus } from '../../../../core/services/event-bus'

import BaseTemplate from '../../../templates/Base/Base.template'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { buildWebDevelopmentTemplate } from './WebDevelopment.hooks'
import { WebDevelopmentPageContent, WebDevelopmentViewProps } from './WebDevelopment.contracts'

/**
 * @see useAbstractViewProvides
 * @see WebDevelopmentViewProps
 */
const WebDevelopmentView = (props: WebDevelopmentViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile,
    fetchAndStoreMultiplePageContent, setLoading, retrieveDocumentFromState
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  const getPageContent = (): WebDevelopmentPageContent => {
    return {
      descriptionOne: retrieveDocumentFromState(Collection.WebDevelopment, Document.DescriptiveOne),
      descriptionTwo: retrieveDocumentFromState(Collection.WebDevelopment, Document.DescriptiveTwo),
      numerical: retrieveDocumentFromState(Collection.WebDevelopment, Document.Numerical),
      experienceItems: retrieveDocumentFromState(Collection.WebDevelopment, Document.BrandsExperience)
    }
  }

  const _initPage = async (): Promise<void> => {
    await fetchAndStoreMultiplePageContent([
      {
        collectionName: Collection.WebDevelopment,
        documentName: Document.DescriptiveOne
      },
      {
        collectionName: Collection.WebDevelopment,
        documentName: Document.DescriptiveTwo
      },
      {
        collectionName: Collection.WebDevelopment,
        documentName: Document.Numerical
      },
      {
        collectionName: Collection.WebDevelopment,
        documentName: Document.BrandsExperience
      }
    ])
  }

  useEffect(() => {
    setLoading!(true)
    _initPage()
      .catch((e: Error) => console.error(e.message))
      .finally(() => setLoading!(false))
  }, [])

  const slots = {
    main: {
      node: buildWebDevelopmentTemplate({
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

export default WebDevelopmentView
