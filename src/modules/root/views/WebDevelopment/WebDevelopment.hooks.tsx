import React from 'react'

import BrandsExperience from '../../../shared/components/BrandsExperience/BrandsExperience'
import CustomHeading from '../../../dsl/Heading/Heading'
import CustomButton from '../../../dsl/Button/Button'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'
import CustomCodeBlock from '../../../shared/components/CodeBlock/CodeBlock'
import MacWindow from '../../../shared/components/MacWindow/MacWindow'
import { MacWindowTheme } from '../../../shared/components/MacWindow'
import { REDIRECT_LINKED_IN_EVENT } from '../../../shared/helpers/events/redirect-linkedin'

import FactsNumbers from '../../components/FactsNumbers/FactsNumbers'

import { UseWebDevelopmentViewContentProvides } from './WebDevelopment.contracts'

export const buildWebDevelopmentTemplate = (props: UseWebDevelopmentViewContentProvides) => {
  const onReachMeBtnClick = () => {
    if (props.eventBus) {
      props.eventBus.$on(REDIRECT_LINKED_IN_EVENT, null)
    }
  }

  const descriptionOne = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.descriptionOne : undefined
  const descriptionTwo = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.descriptionTwo : undefined
  const numericalItems = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.numerical : undefined
  const brandsExperienceItems = typeof props.getPageContent() !== 'undefined' ? props.getPageContent()!.experienceItems : undefined

  const codeContent = `...
    public async removeFromCart (uid: string): Promise<void> {
        if (!this.cart) {
            return
        }

        try {
            const itemToRemove = this.cart.items.find(item => item.uid === uid)
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
      { descriptionOne &&
        <div className="WebDevelopmentView__frontend-section">
          { descriptionOne.heading &&
            <div className="view-heading">
              <CustomHeading content={ descriptionOne.heading } classNames={['h1']} />
              <CustomButton label={ 'Reach me out' }
                            classNames={[props.isMobile ? 'w-100' : '']}
                            onClick={ onReachMeBtnClick } />
            </div>
          }

          { (descriptionOne.descriptionLeft || descriptionOne.descriptionRight) &&
            <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
              { descriptionOne.descriptionLeft && <CustomParagraph content={ descriptionOne.descriptionLeft } /> }
              { descriptionOne.descriptionRight && <CustomParagraph content={ descriptionOne.descriptionRight } /> }
            </div>
          }

          <MacWindow content={ <CustomCodeBlock snippet={ codeContent } /> }
                     contentPadding={ false }
                     topText="modules/checkout/services/cart.service.ts" />
        </div>
      }

      {/*Ecommerce section*/}
      { descriptionTwo &&
        <div className="WebDevelopmentView__ecommerce-section">
          { descriptionTwo.heading &&
            <div className="view-heading">
              <CustomHeading content="Ecommerce<br/>& Content Management"
                             renderAsHtml={ true }
                             classNames={['h1']} />
            </div>
          }

          { (descriptionTwo.descriptionRight || descriptionTwo.descriptionLeft) &&
            <div className={`view-double-text-layout ${ props.isDesktop || props.isTablet ? 'justify' : '' }`}>
              { descriptionTwo.descriptionLeft && <CustomParagraph content={ descriptionTwo.descriptionLeft } /> }
              { descriptionTwo.descriptionRight && <CustomParagraph content={ descriptionTwo.descriptionRight } /> }
            </div>
          }

          { numericalItems &&
            <MacWindow content={ <FactsNumbers { ...numericalItems } /> }
                       theme={ MacWindowTheme.DarkReverse } />
          }
        </div>
      }

      {/*Facts section*/}
      <div className="WebDevelopmentView__facts-section"></div>

      {/*Brands Experience section*/}
      { brandsExperienceItems &&
        <BrandsExperience heading="Brands Experience" items={ brandsExperienceItems.items } />
      }
    </div>
  )
}
