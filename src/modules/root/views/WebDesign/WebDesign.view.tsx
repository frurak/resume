import React from 'react'

import BaseTemplate from '../../../templates/Base/Base.template'

import { useWebDesignView } from './WebDesign.hooks'
import { WebDesignViewProps } from './WebDesign.contracts'

/**
 * @see useWebDesignView
 * @see WebDesignViewProps
 */
const WebDesignView = (props: WebDesignViewProps) => {
  const { viewConfig } = useWebDesignView(props)

  const slots = {
    main: {
      node: <div>WEB DESIGN</div>,
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

export default WebDesignView
