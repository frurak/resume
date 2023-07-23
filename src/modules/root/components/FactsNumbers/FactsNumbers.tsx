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
      { props.items && props.items.length > 0 && props.items.map((item, index) => (
        <div key={ index } className="FactsNumbers__item">
          { item.heading && <CustomParagraph content={ item.heading } classNames={['item-heading h1']} /> }
          { item.description && <CustomParagraph content={ item.description } classNames={['item-description h4']} /> }
        </div>
      )) }
    </div>
  )
}

export default FactsNumbers
