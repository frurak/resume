import { useInjection } from 'inversify-react'

import { FirebaseServiceKey, IFirebaseService } from '../../../core/firebase'

export interface UseAbstractPageContentHandlersContentProvides {
  firebaseService?: IFirebaseService
  fetchAndStoreImages?: (catalogName: string) => void
  fetchAndStorePageContent?: (catalogName: string, documentName: string) => void
}

export const useAbstractPageDataHandlers = (): UseAbstractPageContentHandlersContentProvides => {
  const firebaseService: IFirebaseService = useInjection(FirebaseServiceKey)

  const fetchAndStoreImages = async (imageCatalog: string): Promise<void> => {
    await firebaseService.loadStorageImagesByCatalog(imageCatalog)
  }

  const fetchAndStorePageContent = async (catalogName: string, documentName: string): Promise<void> => {
    await firebaseService.getCollectionDocuments(catalogName, documentName)
  }

  return { firebaseService, fetchAndStoreImages, fetchAndStorePageContent }
}
