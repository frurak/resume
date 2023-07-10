
export interface FooterProps {

}

export interface UseFooterContentProvides {
  codebaseTarget: string
  meLinkedInTarget: string
  requestEmail: (e?: Event, to?: string) => void
  requestCall: (e?: Event, to?: string) => void
}
