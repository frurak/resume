
import { FirebaseApp, initializeApp } from 'firebase/app'
import { collection, CollectionReference, DocumentData, Firestore, getFirestore } from '@firebase/firestore'
import { FirebaseConfig } from '../firebase'

export class BaseFirebase {
  protected _config?: FirebaseConfig
  protected _app?: FirebaseApp
  protected _collections?: Array<string> | undefined

  public firestoreDb?: Firestore

  protected boot (): void {
    this.initFirebaseConnection()
    this.initFirestoreDatabase()
  }

  /**
   * @protected
   */
  protected initFirebaseConnection (): void {
    if (!this._config) {
      throw new Error('[FirebaseService:initConnection] Provide firebase configuration object!')
    }

    this._app = initializeApp(this._config)
  }

  /**
   * @protected
   */
  protected initFirestoreDatabase (): void {
    if (!this._app) {
      throw new Error('[FirebaseService:initFirestoreDatabase] There is no initialized firebase app!')
    }

    this.firestoreDb = getFirestore(this._app)
  }

  /**
   * @protected
   */
  protected getCollectionReference (collectionName: string): CollectionReference<DocumentData> | undefined {
    if (!this.firestoreDb || typeof this._collections === 'undefined') {
      return
    }

    if (!this._collections.find(c => c === collectionName)) {
      console.error(`[FirebaseService] '${collectionName}' is not a valid collection!`)
      return
    }

    return collection(this.firestoreDb, collectionName)
  }
}
