
import { LinkProps, UseLinkContentProvides } from './index'

export const useLink = (props: LinkProps): UseLinkContentProvides => {
  const customClasses = props.customClasses ? props.customClasses.join(' ') : ''

  return { customClasses }
}
