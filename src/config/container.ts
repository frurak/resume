
import { Container } from 'inversify'

import { DrawersConnectorKey } from '../core/services/drawers'
import DrawersConnector from '../core/services/drawers/service'
import { drawersDefaultConfig, drawersRegistry } from './drawers'
import { firebaseConfig, FirebaseServiceKey, FirebaseService } from '../core/firebase'
import { firebaseKey } from './firebase'
import { UserAgentServiceKey } from '../core/services/user-agent'
import UserAgentService from '../core/services/user-agent/service'
import store from '../core/store/store'
import { EventbusType } from '../core/services/event-bus'
import EventBus from '../core/services/event-bus/service'

/**
 * Binds Inversify container
 * @param appConfig
 */
export const bindAppContainerRegistry = (appConfig: any) => {
  const container = new Container()

  container.bind(EventbusType).toConstantValue(new EventBus())

  container.bind(UserAgentServiceKey).toConstantValue(new UserAgentService(store.dispatch))

  container.bind(DrawersConnectorKey).toConstantValue(new DrawersConnector(drawersRegistry, drawersDefaultConfig))

  container.bind(FirebaseServiceKey).toConstantValue(new FirebaseService(firebaseConfig, appConfig[firebaseKey].availableCollections))

  return container
}
