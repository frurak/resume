import React from 'react'

import { BrandingItemData } from '../BrandingItemsList.contracts'
import CustomImage from '../../../../dsl/Image/Image'
import CustomParagraph from '../../../../dsl/Paragraph/Paragraph'
import CustomLink from '../../../../dsl/Link/Link'
import { RouteTargetType } from '../../../contracts/routes.contracts'

const BrandingItem = (props: BrandingItemData) => {
  const hasOwnPage = props.hasOwnPage ?? false

  return (
    hasOwnPage
      ? <CustomLink targetType={ RouteTargetType.Internal }
                    customClasses={['BrandingItem --paged']}
                    target={ props.id }
                    label={
                      <>
                        <div className="BrandingItem__image-wrapper">
                          <CustomImage src={props.image} />
                        </div>
                        <div className="BrandingItem__content-wrapper">
                          {/*<span className="paged-label">Click for details</span>*/}
                          <div className="BrandingItem__captions">
                            <CustomParagraph content={props.caption} classNames={['caption']} />
                            {props.captionDetails &&
                              <CustomParagraph content={props.captionDetails} classNames={['caption-details']} />}
                          </div>
                        </div>
                      </>
                    } />

      : <div className="BrandingItem">
          <div className="BrandingItem__image-wrapper">
            <CustomImage src={ props.image } />
          </div>

          <div className="BrandingItem__content-wrapper">
            <div className="BrandingItem__captions">
              <CustomParagraph content={ props.caption } classNames={['caption']} />
              { props.captionDetails && <CustomParagraph content={ props.captionDetails } classNames={['caption-details']} /> }
            </div>
          </div>
  </div>
  )
}

export default BrandingItem
