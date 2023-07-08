import React from 'react'
import { RouteMetaData } from '../../root/contracts/routes.contracts'

export interface AbstractTemplateProps {
  meta?: RouteMetaData
  slots: AbstractTemplateSlots
}

export interface AbstractTemplateSlots {
  header?: AbstractTemplateSlot,
  main?: AbstractTemplateSlot,
  footer?: AbstractTemplateSlot,
}

export interface AbstractTemplateSlot {
  node: React.ReactNode,
  classNames?: Array<string>
}
