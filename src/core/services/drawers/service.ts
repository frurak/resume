
import { BehaviorSubject } from 'rxjs'
import { ReactElement } from 'react'

import {
  DrawerConfig,
  DrawerPayload,
  DrawersRegistry,
  DrawerStreamState,
  IDrawersConnector
} from './contracts'

export default class DrawersConnector implements IDrawersConnector {
  protected _$defaultConfig: DrawerConfig
  protected _$registry: DrawersRegistry
  protected _$state!: DrawerStreamState
  protected _$stream: BehaviorSubject<DrawerStreamState>

  constructor (registry: DrawersRegistry, defaultConfig: DrawerConfig) {
    this._$defaultConfig = defaultConfig
    this._$registry = registry
    this._$stream = new BehaviorSubject<DrawerStreamState>({
      component: null,
      opened: false,
      payload: {},
      config: {
        ...this._$defaultConfig
      }
    })

    this._$stream.subscribe((state: DrawerStreamState) => {
      this._$state = state
    })
  }

  /**
   * @inheritDoc
   */
  public close (): void {
    this._$stream.next({
      component: null,
      opened: false,
      payload: {},
      config: {}
    })

    DrawersConnector.unlockScroll()
  }

  /**
   * @inheritDoc
   */
  public getComponent (drawerName: string): ReactElement | undefined {
    if (!this._$registry[drawerName]) {
      console.error(`[DrawersConnector] There is no '${drawerName}' component in drawers registry!`)
      return
    }

    return this._$registry[drawerName]
  }

  /**
   * @inheritDoc
   */
  public open<Payload extends DrawerPayload>(
    drawerName: string,
    payload?: Payload,
    config: DrawerConfig = {}
  ) {
    if (!this._$registry[drawerName]) {
      console.error(`[DrawersConnector] There is no '${drawerName}' in drawers registry!`)
      return
    }

    this._$stream.next({
      component: drawerName,
      opened: true,
      payload: payload ?? {},
      config: { ...this._$defaultConfig, ...config }
    })

    DrawersConnector.lockScroll()
  }

  /**
   * @inheritDoc
   */
  public get name (): string | null {
    return this._$state.component
  }

  /**
   * @inheritDoc
   */
  public subscribe (callback: (state: DrawerStreamState) => any): void {
    this._$stream.subscribe((state: DrawerStreamState) => callback(state))
  }

  /**
   * @private
   */
  private static lockScroll (): void {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
    }
  }

  /**
   * @private
   */
  private static unlockScroll (): void {
    if (typeof window !== 'undefined') {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo({
        left: 0,
        top: parseInt(scrollY || '0') * -1
      });
    }
  }
}
