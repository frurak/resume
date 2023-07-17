import React, { useEffect } from 'react'
import { useInjection } from 'inversify-react'

import { Collection, FirebaseServiceKey, IFirebaseService } from './core/firebase'
import router from './core/router/router'
import { RouterProvider } from 'react-router-dom'
import { IUserAgentService, UserAgentServiceKey } from './core/services/user-agent'

function App() {
  /** Firebase Service */
  const firebaseService: IFirebaseService = useInjection(FirebaseServiceKey)

  /** User Agent Service */
  const userAgentService: IUserAgentService = useInjection(UserAgentServiceKey)

  const setUserAgentDevice = () => {
    userAgentService.setDevice()
  }

  useEffect(() => {
    const fetchCollection = async () => {
      const response = await firebaseService.getDocumentsByCollectionName(Collection.Test)
    }

    fetchCollection()
  }, [])

  // NOTE: setting device is triggered outside useEffect hook
  // because some components get wrong device in theirs hooks.
  setUserAgentDevice()

  return (
    <RouterProvider router={router} />
  );
}

export default App;
