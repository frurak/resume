
import { AbstractViewProvidesOutput } from '../../../shared/abstract/view'

export interface WebDesignViewProps {}

export interface UseWebDesignViewContentProvides extends AbstractViewProvidesOutput {}

export interface CarouselWidthData {
  width: number
  offset: number
  elementsCount: number
}

export enum CarouselNavi {
  Next = 'next',
  Prev = 'prev'
}
