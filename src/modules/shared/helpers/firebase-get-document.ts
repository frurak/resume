import { Collection, Document, IFirebaseService, ImageCatalog } from '../../../core/firebase'

import { BrandingItemsListProps } from '../../root/components/BrandingItemsList'
import { Namespace } from '../../../core/store/reducers'

export type FirebaseDocuments<Items> = {
  items: Items
}

/**
 * Helper function that query stored firebase records
 * @param firebaseService
 * @param collectionName
 * @param documentName
 * @param mapImagesFromCatalog
 */
export const getFirebaseDocuments = <Items>(
  firebaseService: IFirebaseService | undefined,
  collectionName: string,
  documentName: string,
  mapImagesFromCatalog?: ImageCatalog
): FirebaseDocuments<Items> => {
  if (!firebaseService) {
    return { items: [] } as FirebaseDocuments<Items>
  }

  const rootState = firebaseService.getState(Namespace.Root)

  if (!rootState || !rootState.firebaseDocuments) {
    return { items: [] } as FirebaseDocuments<Items>
  }

  let imagesQuery: string | undefined

  if (mapImagesFromCatalog) {
    imagesQuery = firebaseService.buildImagesQueryByCatalog(ImageCatalog.Branding)

    if (!imagesQuery) {
      return { items: [] } as FirebaseDocuments<Items>
    }
  }

  const collection = rootState.firebaseDocuments[Collection.Branding]
  const document = collection ? collection[Document.PageContent] as BrandingItemsListProps : undefined

  const output = document
    ? mapImagesFromCatalog
      ? {
        items: document.items.map((item) => {
          const catalog = rootState.firebaseImages.find((record) => record.catalog === imagesQuery)
          const imageUrl = catalog ? catalog.items.find((image) => image.includes(item.image)) : ''

          return {
            ...item,
            image: imageUrl
          }
        })
      }
      : document
    : { items: [] }

  return output as FirebaseDocuments<Items>
}
