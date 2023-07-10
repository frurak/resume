import React from 'react'

import { KnowledgeProps } from './Knowledge.contracts'
import { useKnowledge } from './Knowledge.hooks'
import CustomHeading from '../../../dsl/Heading/Heading'
import KnowledgeItem from './partials/KnowledgeItem'
import { KnowledgeContext } from './Knowledge.config'

/**
 * @see useKnowledge
 * @see KnowledgeProps
 */
const Knowledge = (props: KnowledgeProps) => {
  const { createKnowledgeContextItems } = useKnowledge(props)

  return (
    <div className="Knowledge">
      <CustomHeading content={'Practical<br>stack & knowledge'} renderAsHtml={ true } classNames={['Knowledge__heading h1']} />

      <KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Coding) } heading="Coding" />
      <KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Drawing) } heading="Drawing" />
      {/*<KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Analytics) } heading="Analytics" />*/}
      <KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Ecommerce) } heading="Ecommerce" />
      <KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Marketing) } heading="Marketing" />
      <KnowledgeItem content={ createKnowledgeContextItems(KnowledgeContext.Others) } heading="Others" />
    </div>
  )
}

export default Knowledge
