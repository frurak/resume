import React from 'react'

import BaseTemplate from '../../../templates/Base/Base.template'

import { buildWebDevelopmentTemplate, useWebDevelopmentView } from './WebDevelopment.hooks'
import { WebDevelopmentViewProps } from './WebDevelopment.contracts'

/**
 * @see useWebDevelopmentView
 * @see WebDevelopmentViewProps
 */
const WebDevelopmentView = (props: WebDevelopmentViewProps) => {
  const { viewConfig } = useWebDevelopmentView(props)

  const slots = {
    main: {
      node: buildWebDevelopmentTemplate({
        ...useWebDevelopmentView(props)
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

export default WebDevelopmentView
