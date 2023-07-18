import { useSelector } from 'react-redux'

import { AppReducers } from '../../../core/store/reducers'

export interface UseAbstractCacheControlContentProvides {
  hasCachedImages?: (imageCatalog: string) => boolean
  hasCachedDocuments?: (catalogName: string, documentName: string) => boolean
}

export const useAbstractCacheControl = (): UseAbstractCacheControlContentProvides => {
  const { firebaseImages, firebaseDocuments } = useSelector((state: AppReducers) => state.root)

  const hasCachedImages = (imageCatalog: string): boolean => {
    return firebaseImages.some(images => images.catalog.includes(imageCatalog))
  }

  const hasCachedDocuments = (catalogName: string, documentName: string): boolean => {
    return firebaseDocuments[catalogName] ? !!firebaseDocuments[catalogName][documentName] : false
  }

  return { hasCachedImages, hasCachedDocuments }
}
