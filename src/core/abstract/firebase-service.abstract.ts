
import { FirebaseApp, initializeApp } from 'firebase/app'
import { collection, Firestore, getFirestore, doc } from '@firebase/firestore'
import { FirebaseStorage, getDownloadURL, getStorage, ref } from '@firebase/storage'
import { Store } from '@reduxjs/toolkit'

import { FirebaseConfig } from '../firebase'

export class BaseFirebase {
  protected _config?: FirebaseConfig
  protected _app?: FirebaseApp
  protected _connectionsConfig?: Record<string, any>
  protected _storage?: FirebaseStorage
  protected _store?: Store

  public firestoreDb?: Firestore

  private get hasCollectionsConnectionsDefined (): boolean {
    return this._connectionsConfig ? Array.isArray(this._connectionsConfig.availableCollections) : false
  }

  protected boot (): void {
    this._initFirebaseConnection()
    this._initFirestoreDatabase()
    this._initFirebaseStorage()
  }

  /**
   * @protected
   */
  protected _initFirebaseConnection (): void {
    if (!this._config) {
      throw new Error('[FirebaseService:initConnection] Provide firebase configuration object!')
    }

    this._app = initializeApp(this._config)
  }

  /**
   * @protected
   */
  protected _initFirestoreDatabase (): void {
    if (!this._app) {
      throw new Error('[FirebaseService:initFirestoreDatabase] There is no initialized firebase app!')
    }

    this.firestoreDb = getFirestore(this._app)
  }

  /**
   * @protected
   */
  protected _initFirebaseStorage (): void {
    if (!this._app) {
      throw new Error('[FirebaseService:initFirebaseStorage] There is no initialized firebase app!')
    }

    this._storage = getStorage(this._app)
  }

  /**
   * @protected
   */
  protected _getFirestoreReference<OutputType>(collectionName: string, documentName?: string): OutputType | undefined {
    if (!this.firestoreDb || !this.hasCollectionsConnectionsDefined) {
      return
    }

    if (!this._connectionsConfig!.availableCollections.find((c: string) => c === collectionName)) {
      console.error(`[FirebaseService] '${collectionName}' is not a valid collection!`)
      return
    }

    if (documentName && !this._connectionsConfig!.availableDocuments.find((d: string) => d === `${collectionName}/${documentName}`)) {
      console.error(`[FirebaseService] '${collectionName}/${documentName}' is not a valid document!`)
      return
    }

    return documentName
      ? doc(this.firestoreDb, collectionName, documentName) as OutputType
      : collection(this.firestoreDb, collectionName) as OutputType
  }

  /**
   * @protected
   */
  protected async _getImageWithDownloadableLink (imagePath: string): Promise<string | null> {
    try {
      return await getDownloadURL(ref(this._storage!, imagePath))
    } catch (e) {
      console.error(`[FirebaseService:populateImageWithDownloadableLink] ${ (e as Error).message }`)
      return null
    }
  }
}
