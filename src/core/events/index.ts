import { interfaces } from 'inversify'
import Container = interfaces.Container

import redirectLinkedIn from '../../modules/shared/helpers/redirect-linkedin'

import { EventbusType, IEventBus } from '../services/event-bus'

/**
 * Registers global events handling
 * @param container
 */
const registerEvents = (container?: Container): void => {
  if (!container) {
    return
  }
  const _eventBus: IEventBus | undefined = container.get(EventbusType)

  if (typeof _eventBus !== 'undefined') {
    // Events:
    redirectLinkedIn(_eventBus)
  }
}

export default registerEvents
