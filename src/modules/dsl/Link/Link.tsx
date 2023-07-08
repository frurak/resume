import React from 'react';
import { NavLink } from 'react-router-dom'

import { LinkProps, useLink } from './index'
import { RouteTargetType } from '../../root/contracts/routes.contracts'

/**
 * @see useLink
 * @see LinkProps
 */
const CustomLink = (props: LinkProps) => {
  const { customClasses } = useLink(props)

  return (
    props.target && props.label &&
      props.targetType === RouteTargetType.Internal
        ? <NavLink to={ props.target }
                   onClick={props.onClick}
                   className={ `Link ${ props.isActive ? '--active' : customClasses }` }>
            { props.label }
          </NavLink>

        : <a href={ props.target }
             target="_blank"
             onClick={props.onClick}
             className={ `Link ${ props.isActive ? '--active' : customClasses }` }>
            { props.label }
          </a>
  );
};

export default CustomLink
