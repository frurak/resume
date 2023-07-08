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

  useEffect(() => {
    const fetchCollection = async () => {
      const response = await firebaseService.getDocumentsByCollectionName(Collection.Test)
    }

    const setUserAgentDevice = () => {
      userAgentService.setDevice()
    }

    fetchCollection()
    setUserAgentDevice()
  }, [])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
