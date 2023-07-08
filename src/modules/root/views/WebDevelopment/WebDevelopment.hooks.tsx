
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import { WebDevelopmentViewProps } from './WebDevelopment.contracts'

/**
 * Web Development view logic
 */
export const useWebDevelopmentView = (props: WebDevelopmentViewProps) => {
  const { viewConfig } = useAbstractViewProvides()

  return { viewConfig }
}
