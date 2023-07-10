import React from 'react'

import CustomHeading from '../../../dsl/Heading/Heading'

import { BrandsExperienceProps } from './BrandsExperience.contracts'
import { useBrandExperience } from './BrandsExperience.hooks'
import BrandExperienceItem from './partials/BrandExperienceItem'

const BrandsExperience = (props: BrandsExperienceProps) => {
  const {} = useBrandExperience(props)

  return (
    <div className="BrandsExperience">
      <CustomHeading content={ props.heading } classNames={['h1 BrandsExperience__heading']} level="h3" />

      { props.items && props.items.length > 0 &&
        <div className="BrandsExperience__items">
          { props.items.map((item, index) => (
              <BrandExperienceItem key={ index } { ...item } />
            ))
          }
        </div>
      }
    </div>
  )
}

export default BrandsExperience
