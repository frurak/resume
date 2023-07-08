import React from 'react'

export interface RouteConfig {
  path?: string,
  name: string,
  element?: React.ReactNode,
  targetType?: RouteTargetType,
  target?: string,
  label?: string
  meta?: RouteMetaData
}

export enum RouteTargetType {
  External = 'external',
  Internal = 'internal'
}

export interface RouteMetaData {
  title?: string
  description?: string
}

export const PAGE_DEFAULT_META_TITLE = 'Filip Rurak'
export const PAGE_DEFAULT_META_DESCRIPTION = 'Filip Rurak' // TODO
