
import { CollectionReference, DocumentReference, getDocs, getDoc } from '@firebase/firestore'
import { ref, listAll } from '@firebase/storage'
import { Store } from '@reduxjs/toolkit'
import { injectable } from 'inversify'

import { RootInitialState } from '../../modules/root/store/contracts'
import { setFirebaseDocuments, setStorageImagesUrls } from '../../modules/root/store/slice'

import type { FirebaseConfig, IFirebaseService } from './index'
import { BaseFirebase } from '../abstract/firebase-service.abstract'

@injectable()
export class FirebaseService extends BaseFirebase implements IFirebaseService {

  constructor (config: FirebaseConfig, connectionsConfig: Record<string, any> | undefined, store: Store | undefined) {
    super()

    this._config = config
    this._connectionsConfig = connectionsConfig
    this._store = store

    this.boot()
  }

  /**
   * @inheritDoc
   */
  buildImagesQueryByCatalog (catalog: string): string | undefined {
    if (!this._connectionsConfig || !this._connectionsConfig.imagesRootPath) {
      return
    }

    return `${ this._connectionsConfig.imagesRootPath }/${ catalog }`
  }

  /**
   * @inheritDoc
   */
  getState (namespace: string): RootInitialState | undefined {
    if (typeof this._store === 'undefined') {
      return
    }
    return this._store?.getState()[namespace]
  }

  /**
   * @inheritDoc
   */
  public async getCollection (collectionName: string): Promise<unknown | undefined> {
    const collectionRef = this._getFirestoreReference<CollectionReference>(collectionName)

    if (!collectionRef) {
      return
    }

    const response = await getDocs(collectionRef)
    return response.docs.map((doc) => ({ ...doc.data() }))
  }

  /**
   * @inheritDoc
   */
  public async getCollectionDocuments (collectionName: string, documentName: string, storeResults: boolean = true): Promise<unknown | undefined> {
    const documentRef = this._getFirestoreReference<DocumentReference>(collectionName, documentName)

    if (!documentRef) {
      return
    }

    const response = await getDoc(documentRef)

    if (storeResults && typeof response.data() !== 'undefined') {
      if (typeof this._store !== 'undefined') {
        this._store.dispatch(setFirebaseDocuments({
          collectionName: collectionName,
          documentName: documentName,
          ...response.data()
        }))
      }
    }

    return response.data()
  }

  /**
   * TODO: Handle CORS in server
   * https://firebase.google.com/docs/storage/web/download-files
   * @inheritDoc
   */
  public async loadStorageImagesByCatalog (catalog: string, storeResults: boolean = true): Promise<Array<string> | undefined> {
    if (!this._storage) {
      console.error(`[FirebaseService:loadStorageImages] There is no storage defined!`)
      return
    }

    if (!this._connectionsConfig || !Object.prototype.hasOwnProperty.call(this._connectionsConfig, 'imagesRootPath')) {
      console.error(`[FirebaseService:loadStorageImages] There is no defined 'imagesRootPath' or 'connectionsConfig'!`)
      return
    }

    if (!this._connectionsConfig.availableImageCatalogs.includes(catalog)) {
      console.error(`[FirebaseService:loadStorageImages] Provides '${ catalog }' catalog name is not allowed in application!`)
      return
    }

    const catalogPath = `${ this._connectionsConfig.imagesRootPath }/${ catalog }`

    try {
      const data = await listAll(ref(this._storage, catalogPath))
      if (data.items.length === 0) {
        return
      }

      const downloadableItems = await Promise.all(data.items.map(async (item) => {
        return await this._getImageWithDownloadableLink(item.fullPath)
      }))

      if (downloadableItems.every(item => item === null)) {
        return
      }

      const outputItems = downloadableItems.filter(item => item !== null) as Array<string>

      if (storeResults) {
        if (typeof this._store !== 'undefined') {
          this._store.dispatch(setStorageImagesUrls(
            [{ catalog: catalogPath, items: outputItems }]
          ))
        }
      }

      return outputItems
    } catch (e) {
      console.error(`[FirebaseService:loadStorageImagesByCatalog] ${ (e as Error).message }`)
      return
    }
  }
}
