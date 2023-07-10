import React from 'react'

import CustomParagraph from '../../../dsl/Paragraph/Paragraph'

import { FactsNumbersProps } from './FactsNumbers.contracts'
import { useFactsNumbers } from './FactsNumbers.hooks'

/**
 * @see useFactsNumbers
 * @see FactsNumbersProps
 */
const FactsNumbers = (props: FactsNumbersProps) => {
  const {} = useFactsNumbers(props)

  return (
    <div className="FactsNumbers">
      { props.items.map((item, index) => (
        <div key={ index } className="FactsNumbers__item">
          <CustomParagraph content={ item.heading } classNames={['item-heading h1']} />
          <CustomParagraph content={ item.description } classNames={['item-description h4']} />
        </div>
      )) }
    </div>
  )
}

export default FactsNumbers
