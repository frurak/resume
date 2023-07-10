import { MacWindowProps, MacWindowTheme, UseMacWindowContentProvides } from './MacWindow.contracts'

export const useMacWindow = (props: MacWindowProps): UseMacWindowContentProvides => {
  const themeClass = props.theme ? `--${ props.theme }` : `--${ MacWindowTheme.Dark }`
  const contentPadding = props.contentPadding ?? true

  return { themeClass, contentPadding }
}
