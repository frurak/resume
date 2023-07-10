import React from 'react'

export interface KnowledgeProps {}

export interface UseKnowledgeContentProvides {
  createKnowledgeContextItems: (context: string) => Array<ToolData>
}

export interface KnowledgeItemProps {
  content: Array<ToolData>
  heading: string
}

export type KnowledgeItemType = 'icon' | 'text'

export type KnowledgeItemAlignment = 'horizontal' | 'vertical'

export type KnowledgeItemContext = 'coding' | 'drawing' | 'others' | 'analytics' | 'ecommerce' | 'marketing'

export interface ToolData {
  alignment?: KnowledgeItemAlignment
  content: string | React.ReactNode
  context: KnowledgeItemContext
  alt: string
}


