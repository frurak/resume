
export const EventbusType = Symbol.for('IEventbus')

export interface IEventBus {
  $on (name: string, payload: any): void
  $watch<CallbackType>(eventName: string, callback: EventBusCallback<CallbackType>): void
}

export interface EventPayload<Data> {
  name: string
  payload?: Data
}

export type EventBusCallback<CallbackType> = (event: EventPayload<CallbackType>) => void
