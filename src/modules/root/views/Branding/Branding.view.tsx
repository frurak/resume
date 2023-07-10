import React from 'react'

import BaseTemplate from '../../../templates/Base/Base.template'

import { BrandingViewProps } from './Branding.contracts'
import { buildBrandingTemplate, useBrandingView } from './Branding.hooks'

/**
 * @see useBrandingView
 * @see BrandingViewProps
 */
const BrandingView = (props: BrandingViewProps) => {
  const { viewConfig } = useBrandingView(props)

  const slots = {
    main: {
      node: buildBrandingTemplate({
        ...useBrandingView(props)
      }),
      classNames: ['container']
    }
  }

  return (
    <BaseTemplate
      slots={ slots }
      meta={ viewConfig ? viewConfig.meta : undefined }
    />
  )
}

export default BrandingView
