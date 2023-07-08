import { IUserAgentService } from './contracts'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setDevice } from '../../../modules/shared/store/slice'

export default class UserAgentService implements IUserAgentService {
  private readonly _dispatchStore?: Dispatch<AnyAction>

  private readonly phoneQuery = matchMedia('(max-width: 768px)')
  private readonly tabletQuery = matchMedia('(min-width: 769px) and (max-width: 992px)')
  private readonly desktopQuery = matchMedia('(min-width: 993px)')

  constructor (dispatch: Dispatch<AnyAction> | undefined) {
    this._dispatchStore = dispatch
  }

  public setDevice (): void {
    if (typeof this._dispatchStore === 'undefined' || typeof window === 'undefined') {
      return
    }

    setTimeout(() => {
      this._dispatchStore!(setDevice({
        isDesktop: this.desktopQuery.matches,
        isTablet: this.tabletQuery.matches,
        isMobile: this.phoneQuery.matches
      }))
    }, 0)

    this.listenOnDeviceChange()
  }

  private listenOnDeviceChange (): void {
    this.desktopQuery.addEventListener('change', (e) => {
      this._dispatchStore!(setDevice({ isDesktop: e.matches }))
    })

    this.tabletQuery.addEventListener('change', (e) => {
      this._dispatchStore!(setDevice({ isTablet: e.matches }))
    })

    this.phoneQuery.addEventListener('change', (e) => {
      this._dispatchStore!(setDevice({ isMobile: e.matches }))
    })
  }
}
