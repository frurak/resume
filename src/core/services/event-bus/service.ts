import { BehaviorSubject, filter } from 'rxjs'

import { EventBusCallback, EventPayload, IEventBus } from './contracts'

export default class EventBus implements IEventBus {
  protected _$stream: BehaviorSubject<EventPayload<any>>

  constructor () {
    const event: EventPayload<any> = { name: 'app:started' }
    this._$stream = new BehaviorSubject(event)
  }

  /**
   * Registers event
   * @param name
   * @param payload
   */
  public $on (name: string, payload: any = null): void {
    this._$stream.next({
      name,
      payload
    })
  }

  /**
   * Handles event callback by eventName
   * @param eventName
   * @param callback
   */
  public $watch<CallbackType>(eventName: string, callback: EventBusCallback<CallbackType>): void {
    this._$stream.pipe(
      filter((event) => event.name === eventName)
    ).subscribe((event: any) => {
      setTimeout(() => callback(event), 1)
    })
  }
}
