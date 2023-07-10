import React from 'react'

import { ReactComponent as CloseIcon } from '../../../../assets/icons/CloseIcon.svg'
import CustomParagraph from '../../../dsl/Paragraph/Paragraph'

import { DrawerContainerProps } from './DrawerContainer.contracts'
import { useDrawerContainer } from './DrawerContainer.hooks'

/**
 * @see useDrawerContainer
 * @see DrawerContainerProps
 */
const DrawerContainer = (props: DrawerContainerProps) => {
  const { isFullHeight, hasHeading, hasCloseIcon, close, getDrawerClasses } = useDrawerContainer(props)

  return (
    <div className={`DrawerContainer container ${ getDrawerClasses() }`}>
      <div className="DrawerContainer__top container">
        { hasHeading && <CustomParagraph content={ props.config.heading as string } classNames={['drawer-heading']} /> }

        { hasCloseIcon && <span className="close-icon"><CloseIcon /></span> }
      </div>

      <div className="DrawerContainer__inner container">
        { React.cloneElement(props.children, { ...props, closeCallback: close }) }
      </div>
    </div>
  );
};

export default DrawerContainer;
