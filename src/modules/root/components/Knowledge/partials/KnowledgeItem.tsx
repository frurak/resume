import React from 'react'

import { KnowledgeItemContext, KnowledgeItemProps } from '../Knowledge.contracts'
import CustomParagraph from '../../../../dsl/Paragraph/Paragraph'
import { KnowledgeContext } from '../Knowledge.config'
import CustomHeading from '../../../../dsl/Heading/Heading'

const KnowledgeItem = (props: KnowledgeItemProps) => {
  const textContexts: Array<KnowledgeItemContext> = [
    KnowledgeContext.Marketing,
    KnowledgeContext.Ecommerce,
    KnowledgeContext.Analytics,
    KnowledgeContext.Others
  ]

  return (
    <div className="KnowledgeItem">
      <CustomParagraph content={ props.heading } classNames={['KnowledgeItem__context h3']} />
      <div className="KnowledgeItem__items">
        { props.content.map((element, index) => (
          textContexts.includes(element.context)
            ? <CustomHeading level="h5"
                             classNames={['KnowledgeItem__text-element h3']}
                             content={ element.content }
                             key={ index } />
            : <div className={`KnowledgeItem__element ${ !!element.alignment ? '--'+element.alignment : '' }`}
                   key={ index }>
                { element.content }
              </div>
        )) }
      </div>
    </div>
  )
}

export default KnowledgeItem
