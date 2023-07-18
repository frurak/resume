import React, { useEffect, useState } from 'react'
import { useInjection } from 'inversify-react'
import { Oval } from 'react-loader-spinner'

import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import { EventbusType, EventPayload, IEventBus } from '../../../../core/services/event-bus'

import { FULL_SCREEN_LOADER_EVENT, ovalSpinnerConfig } from './FullScreenLoader.config'

const FullScreenLoader = () => {
  const [visible, setVisible] = useState(false)

  const eventBus: IEventBus = useInjection(EventbusType)

  useEffect(() => {
    eventBus.$watch(FULL_SCREEN_LOADER_EVENT, (event: EventPayload<boolean>) => {
      setVisible(!!event.payload)
    })
  }, [])

  return (
    <div className={`FullScreenLoader ${ visible ? 'd-flex' : 'd-none' }`}>
      <Oval { ...ovalSpinnerConfig } />
      <CustomParagraph content="Page loading..." />
    </div>
  )
}

export default FullScreenLoader
