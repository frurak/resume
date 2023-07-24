import { ExperienceProps, UseExperienceContentProvides } from './Experience.contracts'

export const useExperience = (props: ExperienceProps): UseExperienceContentProvides => {
  const hasItems = Array.isArray(props.items) && props.items.length > 0

  const _canSort = hasItems ? props.items.every(item => !!item.order) : false
  const sortedItems = _canSort
    ? [...props.items]
      .sort((a, b) => {
        return Number(a.order!) > Number(b.order!) ? 1 : -1
      })
    : props.items

  return { hasItems, sortedItems }
}
