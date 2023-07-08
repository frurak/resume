import { KnowledgeProps, UseKnowledgeContentProvides } from './Knowledge.contracts'
import { toolsKnowledgeRegistry } from './Knowledge.config'

export const useKnowledge = (props: KnowledgeProps): UseKnowledgeContentProvides => {
  const createKnowledgeContextItems = (context: string) => {
    return Object.values(toolsKnowledgeRegistry).filter(el => el.context === context)
  }

  return { createKnowledgeContextItems }
}
