
export const FirebaseServiceKey = Symbol.for('IFirebaseService')

export interface IFirebaseService {
  /**
   * Retrieves a firebase collection by its name
   * @param collectionName
   */
  getDocumentsByCollectionName (collectionName: string): Promise<unknown | undefined>
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
  Experience = 'experience',
  Test = 'test' // TODO: Remove me
}
