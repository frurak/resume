import { ReactElement } from 'react'

export const DrawersConnectorKey = Symbol.for('IDrawersConnector')

export interface IDrawersConnector {
  /**
   * Closes drawer
   */
  close (): void

  /**
   * Returns drawer component from registry
   * @see drawersRegistry
   */
  getComponent (drawerName: string): ReactElement | undefined

  /**
   * Returns drawer name
   */
  name: string | null

  /**
   * Opens drawer ReactElement from registry
   * @see drawersRegistry
   */
  open<Payload extends DrawerPayload>(drawerName: string, payload?: Payload, config?: DrawerConfig): void

  /**
   * Subscribes to stream
   */
  subscribe (callback: (state: DrawerStreamState) => any): void
}

export enum DrawerName {
  Menu = 'menu'
}

export type DrawersRegistry = Record<string, ReactElement>

export interface DrawerPayload {
  [key: string]: any
}

export interface DrawerConfig {
  blurred?: boolean
  fullHeight?: boolean
  hasCloseIcon?: boolean
  heading?: string
}

export interface DrawerStreamState {
  component: string | null
  opened: boolean
  payload: DrawerPayload
  config: DrawerConfig
}
