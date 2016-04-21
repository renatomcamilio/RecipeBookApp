import React from 'react';

const Button = ({ children, type, icon }) => {
  const btnType = `pure-input-1 pure-button ${(type.length ? `pure-button-${type}` : '')}`;
  const btnIcon = icon.length ? `fa fa-${icon}` : '';

  return (
    <button className={btnType}>
      <i className={btnIcon}></i>
      {children && children.length ? ` ${children}` : ''}
    </button>
  );
};

Button.propTypes = {
  children: React.PropTypes.string,
  type: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default Button;
