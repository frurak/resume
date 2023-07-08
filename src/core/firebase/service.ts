
import { getDocs } from '@firebase/firestore'
import { injectable } from 'inversify'

import type { FirebaseConfig, IFirebaseService } from './index'
import { BaseFirebase } from '../abstract/firebase-service.abstract'

@injectable()
export class FirebaseService extends BaseFirebase implements IFirebaseService {

  constructor (config: FirebaseConfig, collections: Array<string> | undefined) {
    super()

    this._config = config
    this._collections = collections

    this.boot()
  }

  /**
   * @inheritDoc
   */
  public async getDocumentsByCollectionName (collectionName: string): Promise<unknown | undefined> {
    const collectionRef = this.getCollectionReference(collectionName)

    if (!collectionRef) {
      return
    }

    const response = await getDocs(collectionRef)
    return response.docs.map((doc) => ({ ...doc.data() }))
  }
}
