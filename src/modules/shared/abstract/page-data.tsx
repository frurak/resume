import { useInjection } from 'inversify-react'

import { FirebaseServiceKey, IFirebaseService } from '../../../core/firebase'

export interface UseAbstractPageContentHandlersContentProvides {
  firebaseService?: IFirebaseService
  _fetchAndStoreImages?: (catalogName: string) => void
  _fetchAndStorePageContent?: (catalogName: string, documentName: string) => void
}

export const useAbstractPageDataHandlers = (): UseAbstractPageContentHandlersContentProvides => {
  const firebaseService: IFirebaseService = useInjection(FirebaseServiceKey)

  const _fetchAndStoreImages = async (imageCatalog: string): Promise<void> => {
    await firebaseService.loadStorageImagesByCatalog(imageCatalog)
  }

  const _fetchAndStorePageContent = async (catalogName: string, documentName: string): Promise<void> => {
    await firebaseService.getCollectionDocuments(catalogName, documentName)
  }

  return { firebaseService, _fetchAndStoreImages, _fetchAndStorePageContent }
}
