
export interface RootInitialState {
  firebaseImages: FirebaseStoredImages
  firebaseDocuments: FirebaseStoredDocuments
}

export type FirebaseStoredImages = Array<StorageImagesUrls>
export type FirebaseStoredDocuments = Record<CollectionName, Record<DocumentName, FirebaseDocument>>

export type CollectionName = string
export type DocumentName = string

export interface StorageImagesUrls {
  catalog: string
  items: Array<string>
}

export interface FirebaseDocument {
  items: Array<unknown>
}

export interface FirebaseDocumentsPayload {
  collectionName: string
  documentName: string
  items: Array<unknown>
}
