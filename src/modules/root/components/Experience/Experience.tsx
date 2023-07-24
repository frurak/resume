import React from 'react'

import CustomHeading from '../../../dsl/Heading/Heading'
import MacWindow from '../../../shared/components/MacWindow/MacWindow'

import CustomExperienceItem from './partials/ExperienceItem'
import { ExperienceProps } from './Experience.contracts'
import { useExperience } from './Experience.hooks'

/**
 * @see useExperience
 * @see ExperienceProps
 */
export const Experience = (props: ExperienceProps) => {
  const { hasItems, sortedItems } = useExperience(props)

  return (
    <div className="Experience">
      <CustomHeading content="Experience" classNames={['h1']} />
      { !!props.detailsWindow && <MacWindow { ...props.detailsWindow } /> }

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
