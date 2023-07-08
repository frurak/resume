import React from 'react'

const DrawerContainer = (props) => {
  console.log(props)
  return (
    <div className="DrawerContainer">
      { React.cloneElement(props.children, { ...props }) }
    </div>
  );
};

export default DrawerContainer;
