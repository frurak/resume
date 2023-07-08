
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import { BrandingViewProps } from './Branding.contracts'

/**
 * Branding view logic
 */
export const useBrandingView = (props: BrandingViewProps) => {
  const { viewConfig } = useAbstractViewProvides()

  return { viewConfig }
}
