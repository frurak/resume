import React, { useState } from 'react'

import { ExperienceItem } from '../Experience.contracts'
import CustomLink from '../../../../dsl/Link/Link'
import { RouteTargetType } from '../../../contracts/routes.contracts'
import CustomParagraph from '../../../../dsl/Paragraph/Paragraph'
import CustomHeading from '../../../../dsl/Heading/Heading'

const CustomExperienceItem = (props: ExperienceItem) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = (): void => {
    setIsExpanded((prevState) => !prevState)
  }

  return (
    <div className="ExperienceItem">
      <CustomLink label={ <CustomHeading content={ props.companyName } /> }
                  target={ props.companyWebsitePath }
                  targetType={ RouteTargetType.External }
                  customClasses={['ExperienceItem__company']} />

      <div className="ExperienceItem__details">
        <CustomParagraph content={ `${ props.dateFrom } - ${props.dateTo}` } />
        <span className="vertical-divider">|</span>
        <CustomHeading content={ props.roles.join(', ') }
                       level="h4" />
      </div>

      <div className="ExperienceItem__description">
        { props.description }
        { !!props.descriptionExpanded && isExpanded && <div className="ExperienceItem__description-extended mt-4">{ props.descriptionExpanded }</div>}
      </div>

      <button className="ExperienceItem__toggler" onClick={ toggleDescription }>{ isExpanded ? 'See less' : 'See more' }</button>

      { !!props.hasDivider && <hr /> }
    </div>
  )
}

export default CustomExperienceItem
