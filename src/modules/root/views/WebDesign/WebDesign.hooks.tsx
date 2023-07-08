
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import { WebDesignViewProps } from './WebDesign.contracts'

/**
 * Web Design view logic
 */
export const useWebDesignView = (props: WebDesignViewProps) => {
  const { viewConfig } = useAbstractViewProvides()

  return { viewConfig }
}
