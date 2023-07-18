import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import initialRootState from './state'
import { FirebaseDocumentsPayload, StorageImagesUrls } from './contracts'

/**
 * Root store
 */
const rootState = createSlice({
  name: 'root',
  initialState: initialRootState,

  reducers: {
    setStorageImagesUrls (state, action: PayloadAction<Array<StorageImagesUrls>>) {
      state.firebaseImages = [
        ...state.firebaseImages,
        ...action.payload
      ]
    },
    setFirebaseDocuments (state, action: PayloadAction<FirebaseDocumentsPayload>) {
      const foundCollection = state.firebaseDocuments[action.payload.collectionName]
      const foundDocument = foundCollection ? foundCollection[action.payload.documentName] : undefined

      const isFoundDocumentComplete = foundDocument && Array.isArray(foundDocument.items)

      state.firebaseDocuments = {
        ...state.firebaseDocuments,
        [action.payload.collectionName]: {
          [action.payload.documentName]: {
            items: [
              ...(isFoundDocumentComplete ? foundDocument.items : []),
              ...action.payload.items
            ]
          }
        }
      }
    }
  }
})

export const { setStorageImagesUrls, setFirebaseDocuments } = rootState.actions

export default rootState.reducer
