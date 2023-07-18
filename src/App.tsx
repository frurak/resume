import React  from 'react'
import { RouterProvider } from 'react-router-dom'
import { useInjection } from 'inversify-react'

import router from './core/router/router'
import { IUserAgentService, UserAgentServiceKey } from './core/services/user-agent'

function App() {
  /** User Agent Service */
  const userAgentService: IUserAgentService = useInjection(UserAgentServiceKey)

  const setUserAgentDevice = () => {
    userAgentService.setDevice()
  }

  // NOTE: setting device is triggered outside useEffect hook
  // because some components get wrong device in theirs hooks.
  setUserAgentDevice()

  return (
    <RouterProvider router={router} />
  );
}

export default App;
