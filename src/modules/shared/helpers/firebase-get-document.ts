import { IFirebaseService } from '../../../core/firebase'

import { Namespace } from '../../../core/store/reducers'

import { DevicesResponsive } from '../../root/components/DevicesCarousel'

export type FirebaseDocuments<ReturnType> = ReturnType | undefined

/**
 * Helper function that query stored firebase records
 * @param firebaseService
 * @param collectionName
 * @param documentName
 * @param mapItemsWithImagesFromCatalog
 * @param useResponsive
 */
export const getFirebaseDocuments = <ReturnType>(
  firebaseService: IFirebaseService | undefined,
  collectionName: string,
  documentName: string,
  mapItemsWithImagesFromCatalog?: string,
  useResponsive: boolean = false
): FirebaseDocuments<ReturnType> => {
  if (!firebaseService) {
    return
  }

  const rootState = firebaseService.getState(Namespace.Root)

  if (!rootState || !rootState.firebaseDocuments) {
    return
  }

  let imagesQuery: string | undefined

  if (mapItemsWithImagesFromCatalog) {
    imagesQuery = firebaseService.buildImagesQueryByCatalog(mapItemsWithImagesFromCatalog)

    if (!imagesQuery) {
      return
    }
  }

  const collection = rootState.firebaseDocuments[collectionName]
  const document = collection ? collection[documentName] as ReturnType : undefined

  const _mapItemsWithImageUrl = (items: Array<any | unknown> | undefined) => {
    return items ? items.map((item) => {
      const catalog = rootState.firebaseImages.find((record) => record.catalog === imagesQuery)
      const imageUrl = catalog ? catalog.items.find((image) => image.includes(item.image)) : ''

      return {
        ...item,
        image: imageUrl
      }
    }) : []
  }

  const output = document
    ? mapItemsWithImagesFromCatalog
      ? {
        // @ts-ignore
        items: document.items
          ? !useResponsive
              // @ts-ignore
            ? _mapItemsWithImageUrl(document.items)
            : {
                // @ts-ignore
                desktop: _mapItemsWithImageUrl((document.items as DevicesResponsive<any | unknown>).desktop),
                // @ts-ignore
                mobile: _mapItemsWithImageUrl((document.items as DevicesResponsive<any | unknown>).mobile)
              }
          : []
        }
      : document
    : undefined

  return output as FirebaseDocuments<ReturnType>
}
