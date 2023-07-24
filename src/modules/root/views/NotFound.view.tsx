import React from 'react'

import CustomParagraph from '../../dsl/Paragraph/Paragraph'
import CustomButton from '../../dsl/Button/Button'
import CustomLink from '../../dsl/Link/Link'
import DrawersWrapper from '../../shared/components/DrawersWrapper/DrawersWrapper'
import Footer from '../../shared/components/Footer/Footer'
import Navbar from '../../shared/components/Navbar/Navbar'

import { RouteTargetType } from '../contracts/routes.contracts'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <header className="NotFoundView__navigation-wrapper container-fluid">
        <Navbar />
      </header>

      <div className="NotFoundView__content container">
        <CustomParagraph content="Page not found..." classNames={['h2']} />
        <CustomLink target="/" targetType={ RouteTargetType.Internal } label={ <CustomButton label="Back to homepage" classNames={['mt-5']} /> } />
      </div>

      <div className="NotFoundView__footer-wrapper container-fluid">
        <Footer />
      </div>

      <DrawersWrapper />
    </div>
  )
}

export default NotFoundView
