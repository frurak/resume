import { RootInitialState } from '../../modules/root/store/contracts'

export const FirebaseServiceKey = Symbol.for('IFirebaseService')

export interface IFirebaseService {
  /**
   * Retrieves a firebase collection by its name
   * @param collectionName
   */
  getCollection (collectionName: string): Promise<unknown | undefined>

  /**
   * Retrieves a firebase collection's document
   * @param collectionName
   * @param documentName
   * @param storeResults
   */
  getCollectionDocuments (collectionName: string, documentName: string, storeResults?: boolean): Promise<unknown | undefined>

  /**
   * Retrieves a firebase images storage data by a given name of sub-catalog, e.g. '/images/<catalog>'
   * @param catalog
   * @param storeResults
   */
  loadStorageImagesByCatalog (catalog: string, storeResults?: boolean): Promise<Array<string> | undefined>

  /**
   * Builds query that reference images catalogs
   * @param catalog
   */
  buildImagesQueryByCatalog (catalog: string): string | undefined

  /**
   * Retrieves @redux state by a given namespace
   * @param namespace
   */
  getState (namespace: string): RootInitialState | undefined
}

export interface FirebaseConfig {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
}

export enum Collection {
  Branding = 'branding'
}

export enum Document {
  PageContent = 'page-content'
}

/**
 * Catalog names defined in firebase storage
 */
export enum ImageCatalog {
  Branding = 'branding',
  Information = 'information',
  WebDesign = 'web-design',
  WebDevelopment = 'web-development'
}
