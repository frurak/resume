
export interface RootInitialState {
  firebaseImages: FirebaseStoredImages
  firebaseDocuments: FirebaseStoredDocuments
}

export type FirebaseStoredImages = Array<StorageImagesUrls>
export type FirebaseStoredDocuments = Record<CollectionName, Record<DocumentName, FirebaseDocument>>

export type CollectionName = string
export type DocumentName = string
export type FirebaseDocument = Record<string, unknown>

export interface StorageImagesUrls {
  catalog: string
  items: Array<string>
}

export interface FirebaseDocumentsPayload extends FirebaseDocument {
  collectionName: string
  documentName: string
}
