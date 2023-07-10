import React from 'react'

import CustomLink from '../../../../dsl/Link/Link'
import CustomParagraph from '../../../../dsl/Paragraph/Paragraph'
import { RouteTargetType } from '../../../../root/contracts/routes.contracts'

import { BrandExperienceItemData } from '../BrandsExperience.contracts'

const BrandExperienceItem = (props: BrandExperienceItemData) => {
  const hasLink = !!props.target && props.target.length > 0

  return (
    <div className="BrandExperienceItem">
      { hasLink
        ? <CustomLink label={ props.label }
                      target={ props.target }
                      targetType={ RouteTargetType.External } />
        : <CustomParagraph content={ props.label } />
      }
    </div>
  )
}

export default BrandExperienceItem
