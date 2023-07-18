import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, useParams } from 'react-router-dom'

import Navbar from '../../shared/components/Navbar/Navbar'

import { PAGE_DEFAULT_META_DESCRIPTION, PAGE_DEFAULT_META_TITLE } from '../../root/contracts/routes.contracts'
import DrawersWrapper from '../../shared/components/DrawersWrapper/DrawersWrapper'
import Footer from '../../shared/components/Footer/Footer'
import FullScreenLoader from '../../shared/components/FullScreenLoader/FullScreenLoader'

import { BaseTemplateProps } from './Base.contracts'

/**
 * Base template
 */
const BaseTemplate = (props: BaseTemplateProps) => {
  const headerSlot = props.slots.header
  const mainSlot = props.slots.main
  const footerSlot = props.slots.footer
  const metaData = props.meta

  const hasParams = Object.keys(useParams()).length > 0

  return (
    <div className="BaseTemplate">
      <Helmet>
        <title>{ metaData ? metaData.title : PAGE_DEFAULT_META_TITLE }</title>
        <meta name="description" content={ metaData ? metaData.description : PAGE_DEFAULT_META_DESCRIPTION } />
      </Helmet>

      <header className="BaseTemplate__navigation-wrapper container-fluid">
        <Navbar />
      </header>
      { headerSlot &&
        <div className={`BaseTemplate__header-slot ${headerSlot.classNames ? headerSlot.classNames.join(' ') : ''}`}>
          { headerSlot.node }
        </div>
      }

      { hasParams
        ? <Outlet />
        : mainSlot &&
          <main className={`BaseTemplate__main-slot ${mainSlot.classNames ? mainSlot.classNames.join(' ') : ''}`}>
            { mainSlot.node }
          </main>
      }

      { footerSlot &&
        <div className={`BaseTemplate__footer-slot ${footerSlot.classNames ? footerSlot.classNames.join(' ') : ''}`}>
          { footerSlot.node }
        </div>
      }

      <div className="BaseTemplate__footer-wrapper container-fluid">
        <Footer />
      </div>

      <DrawersWrapper />
      <FullScreenLoader />
    </div>
  )
}

export default BaseTemplate
