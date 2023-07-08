
import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { routesRegistry } from './routes.config'

const router = createBrowserRouter([
  ...routesRegistry
])

export default router
