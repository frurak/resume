import { FooterProps, UseFooterContentProvides } from './Footer.contracts'

export const useFooter = (props: FooterProps): UseFooterContentProvides => {
  const codebaseTarget = 'https://github.com/frurak/resume'
  const meLinkedInTarget = 'https://www.linkedin.com/in/filip-rurak-6a7685169/'

  const requestEmail = (e?: Event, to?: string): void => {
    if (typeof to === 'undefined') {
      return
    }

    e?.preventDefault()
    window.location.href = 'mailto:' + to
  }

  const requestCall = (e?: Event, to?: string): void => {
    if (typeof to === 'undefined') {
      return
    }

    e?.preventDefault()
    window.location.href = 'tel:' + to
  }

  return { codebaseTarget, meLinkedInTarget, requestEmail, requestCall }
}
