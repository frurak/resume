import React from 'react'

import CustomImage from '../../../dsl/Image/Image'

import { DeviceProps } from './Device.contracts'
import { useDevice } from './Device.hooks'

export const DEVICE_BACKGROUND_SELECTOR = 'Device__background'

/**
 * @see useDevice
 * @see DeviceProps
 */
const Device = (props: DeviceProps) => {
  const { backgroundColor, hasCustomElements, deviceComponent } = useDevice(props)

  return (
    <div className={`Device Device-${ props.device }`}
         ref={ props.DOMRef }
         style={{ ...props.DOMElStyles }}>
      <div className="Device__wrapper">
        <div className={ DEVICE_BACKGROUND_SELECTOR }
             style={{ backgroundColor }}>
          <div className="Device__content-wrapper">
            { props.image && <CustomImage src={ props.image }
                                          classNames={['main-content-image', props.imageClasses ? props.imageClasses.join(' ') : '']} /> }

            { hasCustomElements && props.customElements!.map((e, i) => (
              React.cloneElement(
                e.component,
                {
                  key: i,
                  style: {
                    ...e.styles,
                    top: `${e.topPosition.toString()}px`,
                    left: `${e.leftPosition.toString()}px`,
                    zIndex: e.zIndex
                  },
                  className: `DeviceCustomElement ${ e.classNames ? e.classNames.join(' ') : '' }`
                })
              ))
            }
          </div>
        </div>

        <span className="Device__component">{ deviceComponent() }</span>
      </div>
    </div>
  )
}

export default Device
