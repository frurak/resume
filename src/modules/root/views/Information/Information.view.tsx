import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { Collection, Document } from '../../../../core/firebase'

import BaseTemplate from '../../../templates/Base/Base.template'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { ExperienceProps } from '../../components/Experience'

import { InformationViewPageContent, InformationViewProps } from './Information.contracts'
import { buildInformationTemplate } from './Information.hooks'
import { FactsNumbersProps } from '../../components/FactsNumbers'

/**
 * @see useAbstractViewProvides
 * @see InformationViewProps
 */
const InformationView = (props: InformationViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile,
    fetchAndStoreMultiplePageContent, setLoading, retrieveDocumentFromState
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  const _initPage = async (): Promise<void> => {
    await fetchAndStoreMultiplePageContent([
      {
        collectionName: Collection.Information,
        documentName: Document.PageContent
      },
      {
        collectionName: Collection.Information,
        documentName: Document.Numerical
      }
    ])
  }

  const getPageContent = (): InformationViewPageContent => {
    return {
      experienceItems: retrieveDocumentFromState<ExperienceProps>(Collection.Information, Document.PageContent),
      numerical: retrieveDocumentFromState<FactsNumbersProps>(Collection.Information, Document.Numerical)
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
      node: buildInformationTemplate({
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

export default InformationView
