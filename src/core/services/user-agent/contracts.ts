
export const UserAgentServiceKey = Symbol.for('IUserAgentService')

export interface IUserAgentService {
  setDevice: () => void
}
