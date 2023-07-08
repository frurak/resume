import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../root/components/Navbar/Navbar'

import { BaseTemplateProps } from './Base.contracts'
import { PAGE_DEFAULT_META_DESCRIPTION, PAGE_DEFAULT_META_TITLE } from '../../root/contracts/routes.contracts'

/**
 * Base template
 */
const BaseTemplate = (props: BaseTemplateProps) => {
  const headerSlot = props.slots.header
  const mainSlot = props.slots.main
  const footerSlot = props.slots.footer
  const metaData = props.meta

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

      { mainSlot &&
        <main className={`BaseTemplate__main-slot ${mainSlot.classNames ? mainSlot.classNames.join(' ') : ''}`}>
          { mainSlot.node }
        </main>
      }

      { footerSlot &&
        <div className="BaseTemplate__footer-wrapper container-fluid">
          <footer className={`BaseTemplate__footer-slot ${footerSlot.classNames ? footerSlot.classNames.join(' ') : ''}`}>
            { footerSlot.node }
          </footer>
        </div>
      }
    </div>
  )
}

export default BaseTemplate
