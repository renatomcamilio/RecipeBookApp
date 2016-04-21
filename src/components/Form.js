import React from 'react';

const Form = ({ children, legend }) => (
  <form className="pure-form">
    <fieldset>
      {legend && legend.length ? <legend>{legend}</legend> : ''}

      <div className="pure-g">
        {children || ''}
      </div>
    </fieldset>
  </form>
);

Form.propTypes = {
  children: React.PropTypes.any,
  legend: React.PropTypes.string
};

export default Form;
