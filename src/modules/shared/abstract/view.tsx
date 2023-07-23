import { useMemo, useRef } from 'react'
import { useMatches } from 'react-router-dom'
import { useInjection } from 'inversify-react'

import { EventbusType, IEventBus } from '../../../core/services/event-bus'
import { routesRegistry } from '../../../core/router/routes.config'

import { RouteConfig } from '../../root/contracts/routes.contracts'

import { DeviceType } from '../store/contracts'
import { useAbstractDeviceContentProvides } from './device'
import { useAbstractCacheControl } from './cache-control'
import { UseAbstractPageContentHandlersContentProvides, useAbstractPageDataHandlers } from './page-data'
import { FULL_SCREEN_LOADER_EVENT } from '../components/FullScreenLoader/FullScreenLoader.config'
import { FirebaseDocuments, getFirebaseDocuments } from '../helpers/firebase-get-document'

export interface AbstractViewProvidesOutput extends DeviceType, UseAbstractPageContentHandlersContentProvides {
  viewConfig?: RouteConfig
  eventBus?: IEventBus
  setLoading?: (state: boolean) => void

  retrieveDocumentFromState: <ReturnType>(collectionName: string, documentName: string, imageCatalog?: string, useResponsive?: boolean) => FirebaseDocuments<ReturnType>
  fetchAndStorePageContent: (collectionName: string, documentName: string, collectionsToFetch?: number) => Promise<void>
  fetchAndStoreImages: (catalogName: string) => Promise<void>
  fetchAndStoreMultiplePageContent: (collection: Array<CollectionDetails>) => Promise<void>
}

export interface CollectionDetails {
  collectionName: string
  documentName: string
}

/**
 * Abstract view implementation
 */
export const useAbstractViewProvides = (): AbstractViewProvidesOutput => {
  const { isDesktop, isTablet, isMobile } = useAbstractDeviceContentProvides()
  const { hasCachedImages, hasCachedDocuments } = useAbstractCacheControl()
  const { firebaseService, _fetchAndStoreImages, _fetchAndStorePageContent } = useAbstractPageDataHandlers()

  const eventBus: IEventBus = useInjection(EventbusType)

  const currentRoute = useMatches()
  const viewConfig = useMemo(
    () => routesRegistry.find((route) => route.path === currentRoute[0].pathname),
    []
  )

  const imagesFetched = useRef(false)
  const pageContentDocsFetched = useRef(false)

  /**
   * Handles global full screen loader state
   */
  const setLoading = (state: boolean): void => {
    if (eventBus) {
      eventBus.$on(FULL_SCREEN_LOADER_EVENT, state)
    }
  }

  /**
   * Retrieves fetched page content from root state
   * @param collectionName
   * @param documentName
   * @param imageCatalog (determines whether documents should be mapped with firestore images by file name)
   * @param useResponsive (determines whether documents should be mapped with firestore images with division to images for desktop and for mobile)
   */
  const retrieveDocumentFromState = <ReturnType,>(collectionName: string, documentName: string, imageCatalog?: string, useResponsive?: boolean): FirebaseDocuments<ReturnType> => {
    return getFirebaseDocuments<ReturnType>(
      firebaseService,
      collectionName,
      documentName,
      imageCatalog,
      useResponsive
    )
  }

  /**
   * Fetches Firebase collections' documents
   * @param collectionName
   * @param documentName
   */
  const fetchAndStorePageContent = async (collectionName: string, documentName: string): Promise<void> => {
    if (_fetchAndStorePageContent && hasCachedDocuments && !hasCachedDocuments(collectionName, documentName) && !pageContentDocsFetched.current) {
      pageContentDocsFetched.current = true

      await _fetchAndStorePageContent(collectionName, documentName)
    }
  }

  /**
   * Fetches a collection of multiple firebase collections documents
   * @param collection
   */
  const fetchAndStoreMultiplePageContent = async (collection: Array<CollectionDetails>): Promise<void> => {
    if (_fetchAndStorePageContent && hasCachedDocuments && collection.every(doc => !hasCachedDocuments(doc.collectionName, doc.documentName) ) && !pageContentDocsFetched.current) {
      pageContentDocsFetched.current = true

      await Promise.all(collection.map(async (doc) => {
        return _fetchAndStorePageContent(doc.collectionName, doc.documentName)
      }))
    }
  }

  /**
   * Fetches Firestore images by catalog name
   * @param catalogName
   */
  const fetchAndStoreImages = async (catalogName: string): Promise<void> => {
    if (_fetchAndStoreImages && hasCachedImages && !hasCachedImages(catalogName) && !imagesFetched.current) {
      imagesFetched.current = true

      await _fetchAndStoreImages(catalogName)
    }
  }

  return {
    viewConfig, eventBus, isMobile, isTablet, isDesktop,
    fetchAndStoreImages, fetchAndStorePageContent, setLoading, retrieveDocumentFromState, fetchAndStoreMultiplePageContent
  }
}
