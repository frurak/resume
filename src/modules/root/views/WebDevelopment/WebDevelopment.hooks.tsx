import React from 'react'

import {
  exampleFactsNumbers,
  exampleWebDevelopmentBrandsExperienceItems
} from '../../../../dev-utils/faker/web-development.faker'

import CustomHeading from '../../../dsl/Heading/Heading'
import CustomButton from '../../../dsl/Button/Button'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import CustomCodeBlock from '../../../shared/components/CodeBlock/CodeBlock'
import MacWindow from '../../../shared/components/MacWindow/MacWindow'
import { MacWindowTheme } from '../../../shared/components/MacWindow'
import { useAbstractViewProvides } from '../../../shared/abstract/view-meta'

import FactsNumbers from '../../components/FactsNumbers/FactsNumbers'

import { UseWebDevelopmentViewContentProvides, WebDevelopmentViewProps } from './WebDevelopment.contracts'
import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/redirect-linkedin'

/**
 * Web Development view logic
 */
export const useWebDevelopmentView = (props: WebDevelopmentViewProps): UseWebDevelopmentViewContentProvides => {
  const { viewConfig, isDesktop, isTablet, isMobile } = useAbstractViewProvides()

  return { viewConfig, isDesktop, isTablet, isMobile }
}

export const buildWebDevelopmentTemplate = (props: UseWebDevelopmentViewContentProvides) => {
  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  // TODO: Remove me
  const frontendText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'
  const frontendText2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit dui eget odio maximus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam faucibus laoreet tellus, in lobortis nisi lacinia sit amet. Aliquam magna est, faucibus eget justo sed, varius lobortis nisi. In sed blandit dui.'

  // TODO: Move to app config and add dynamic values
  const facts = exampleFactsNumbers()

  // TODO: Remove me
  const brandsExperienceItems = exampleWebDevelopmentBrandsExperienceItems()


  const codeContent = `...
    public async removeFromCart (uid: string): Promise<void> {
        if (!this.cart) {
            return
        }

        try {
            const itemToRemove = this.cart?.items.find(item => item.uid === uid)
            const updatedCart = await this.cartService.removeFromCart(this.cartId, uid)
            
            if (itemToRemove) {
                this.eventBus.emit('app:cart.remove', this.getCartRemovePayload(itemToRemove, updatedCart))
            }
            
            this.refreshCart(this.considerPreservingItems(updatedCart, uid, 0))
        } catch (e) {
            logger(e, 'warn')
            this.showToast((e as Error).message, 'danger')
        }
    }
  ...`

  return (
    <div className="WebDevelopmentView">
      {/*Frontend section*/}
      <div className="WebDevelopmentView__frontend-section">
        <div className="view-heading">
          <CustomHeading content="Frontend Web Developer"
                         classNames={['h1']} />
          <CustomButton label={ 'Reach me out' }
                        classNames={[props.isMobile ? 'w-100' : '']}
                        onClick={ onReachMeBtnClick } />
        </div>

        <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
          <CustomParagraph content={ frontendText1 } />
          <CustomParagraph content={ frontendText2 } />
        </div>

        <MacWindow content={ <CustomCodeBlock snippet={ codeContent } /> }
                   contentPadding={ false }
                   topText="modules/checkout/services/cart.service.ts" />
      </div>

      {/*Ecommerce section*/}
      <div className="WebDevelopmentView__ecommerce-section">
        <div className="view-heading">
          <CustomHeading content="Ecommerce<br/>& Content Management"
                         renderAsHtml={ true }
                         classNames={['h1']} />
        </div>

        <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
          <CustomParagraph content={ frontendText1 } />
          <CustomParagraph content={ frontendText2 } />
        </div>

        <MacWindow content={ <FactsNumbers { ...facts } /> }
                   theme={ MacWindowTheme.DarkReverse } />
      </div>

      {/*Facts section*/}
      <div className="WebDevelopmentView__facts-section"></div>

      {/*Brands Experience section*/}
      <BrandsExperience heading="Brands Experience"
                        items={ brandsExperienceItems } />
    </div>
  )
}
