import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../../core/services/event-bus'
import { Collection, Document } from '../../../../core/firebase'

import BaseTemplate from '../../../templates/Base/Base.template'
import { useAbstractViewProvides } from '../../../shared/abstract/view'

import { ExperienceProps } from '../../components/Experience'

import { InformationViewProps } from './Information.contracts'
import { buildInformationTemplate } from './Information.hooks'

/**
 * @see useAbstractViewProvides
 * @see InformationViewProps
 */
const InformationView = (props: InformationViewProps) => {
  const {
    viewConfig, isDesktop, isTablet, isMobile,
    fetchAndStorePageContent, setLoading, retrieveDocumentFromState
  } = useAbstractViewProvides()

  const eventBus: IEventBus | undefined = useInjection(EventbusType)

  const _initPage = async (): Promise<void> => {
    await fetchAndStorePageContent(Collection.Information, Document.PageContent)
  }

  const getPageContent = () => {
    return retrieveDocumentFromState<ExperienceProps>(Collection.Information, Document.PageContent)
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
