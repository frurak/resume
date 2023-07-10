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

  return (
    <div className="Experience">
      <CustomHeading content="Experience" classNames={['h1']} />
      { props.items && props.items.length > 0 &&
        props.items.map((item, index) => (
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
