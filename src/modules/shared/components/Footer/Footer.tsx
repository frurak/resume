import { FooterProps } from './Footer.contracts'
import { useFooter } from './Footer.hooks'
import CustomLink from '../../../dsl/Link/Link'
import { RouteTargetType } from '../../../root/contracts/routes.contracts'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'

/**
 * @see useFooter
 * @see FooterProps
 */
const Footer = (props: FooterProps) => {
  const { codebaseTarget, meLinkedInTarget, requestEmail, requestCall } = useFooter(props)

  return (
    <footer className="Footer container">
      <div className="Footer__content">
        <CustomLink label="LinkedIn"
                    customClasses={['Footer__content__linkedIn']}
                    target={ meLinkedInTarget }
                    targetType={ RouteTargetType.External } />

        <div className="Footer__content__contact">
          <CustomLink label="rurakfil@gmail.com" customClasses={['me-email']} onClick={ (e) => requestEmail(e, 'rurakfil@gmail.com') } />
          <CustomLink label="+48 666 882 484" customClasses={['me-phone']} onClick={ (e) => requestCall(e, '+48666882484') } />
          <CustomParagraph content="Warsaw, Poland" />
        </div>
      </div>

      <div className="Footer__copyrights">
        <CustomParagraph content="Filip Rurak 2023 © All rights reserved." classNames={['Footer__copyrights__claim']} />
        <div className="Footer__copyrights__tech-info">
          <CustomParagraph content="Written with: TypeScript, React, Redux Toolkit, Firebase. See the" />&nbsp;
          <CustomLink label="codebase" target={ codebaseTarget } targetType={ RouteTargetType.External } />
        </div>
      </div>
    </footer>
  )
}

export default Footer
