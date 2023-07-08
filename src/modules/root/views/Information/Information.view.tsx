import React from 'react'

import BaseTemplate from '../../../templates/Base/Base.template'

import { InformationViewProps } from './Information.contracts'
import { buildInformationTemplate, useInformationView } from './Information.hooks'

/**
 * @see useInformationView
 * @see InformationViewProps
 */
const InformationView = (props: InformationViewProps) => {
  const { viewConfig } = useInformationView(props)

  const slots = {
    main: {
      node: buildInformationTemplate(props),
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

export default InformationView
