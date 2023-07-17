import { EventPayload, IEventBus } from '../../../core/services/event-bus'

export const REDIRECT_LINKED_IN_EVENT = 'app:redirect-linkedin-profile'
export const LINKEDIN_PROFILE_TARGET_URL = 'https://www.linkedin.com/in/filip-rurak-6a7685169/'

const redirectLinkedIn = (eventBus: IEventBus): void => {
  eventBus.$watch<null>(REDIRECT_LINKED_IN_EVENT, (payload: EventPayload<null>) => {
    window.open(LINKEDIN_PROFILE_TARGET_URL, '_blank')
  })
}

export default redirectLinkedIn
