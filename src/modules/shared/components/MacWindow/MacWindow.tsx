import { MacWindowProps } from './MacWindow.contracts'
import { useMacWindow } from './MacWindow.hooks'

/**
 * @see useMacWindow
 * @see MacWindowProps
 */
const MacWindow = (props: MacWindowProps) => {
  const { themeClass, contentPadding } = useMacWindow(props)

  return (
    <div className={`MacWindow ${ themeClass } ${ contentPadding ? '--content-padding' : '' } `}>
      <div className="MacWindow__top">
        <div className="MacWindow__fake-actions">
          { Array.from(Array(3)).map((e, i) => (
            <span key={ i } className="MacWindow__fake-action"></span>
          )) }
        </div>

        { props.topText && <div className="MacWindow__top__text">{ props.topText }</div> }
      </div>

      <div className="MacWindow__content"
           style={{ backgroundColor: props.contentColor ?? undefined }}>{ props.content }</div>
    </div>
  )
}

export default MacWindow
