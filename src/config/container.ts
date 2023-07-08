
import { Container } from 'inversify'

import { DrawersConnectorKey } from '../core/services/drawers'
import DrawersConnector from '../core/services/drawers/service'
import { drawersRegistry } from './drawers'
import { firebaseConfig, FirebaseServiceKey, FirebaseService } from '../core/firebase'
import { firebaseKey } from './firebase'
import { UserAgentServiceKey } from '../core/services/user-agent'
import UserAgentService from '../core/services/user-agent/service'
import store from '../core/store/store'

/**
 * Binds Inversify container
 * @param appConfig
 */
export const bindAppContainerRegistry = (appConfig: any) => {
  const container = new Container()

  container.bind(UserAgentServiceKey).toConstantValue(new UserAgentService(store.dispatch))

  container.bind(DrawersConnectorKey).toConstantValue(new DrawersConnector(drawersRegistry))

  container.bind(FirebaseServiceKey).toConstantValue(new FirebaseService(firebaseConfig, appConfig[firebaseKey].availableCollections))

  return container
}
