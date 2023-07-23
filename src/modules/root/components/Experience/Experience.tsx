import { ExperienceProps } from './Experience.contracts'
import { useExperience } from './Experience.hooks'
import CustomExperienceItem from './partials/ExperienceItem'
import CustomHeading from '../../../dsl/Heading/Heading'

/**
 * @see useExperience
 * @see ExperienceProps
 */
export const Experience = (props: ExperienceProps) => {
  const {} = useExperience(props)

  const hasItems = Array.isArray(props.items) && props.items.length > 0
  const canSort = hasItems ? props.items.every(item => !!item.order) : false
  const sortedItems = canSort
    ? [...props.items]
        .sort((a, b) => {
          return Number(a.order!) > Number(b.order!) ? 1 : -1
        })
    : props.items

  return (
    <div className="Experience">
      <CustomHeading content="Experience" classNames={['h1']} />
      { hasItems &&
        sortedItems.map((item, index) => (
          <CustomExperienceItem key={ item.id }
                                id={ item.id }
                                companyName={ item.companyName }
                                companyWebsitePath={ item.companyWebsitePath }
                                dateFrom={ item.dateFrom }
                                dateTo={ item.dateTo }
                                description={ item.description }
                                descriptionExpanded={ item.descriptionExpanded }
                                roles={ item.roles }
                                hasDivider={ true } />
        ))
      }
    </div>
  )
}

export default Experience
