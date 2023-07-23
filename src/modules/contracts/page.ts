import { FirebaseDocuments } from '../shared/helpers/firebase-get-document'

export interface PageContent<Documents> {
  getPageContent: () => FirebaseDocuments<Documents>
}

export interface PageDescriptiveContent {
  heading?: string
  descriptionLeft?: string
  descriptionRight?: string
}
