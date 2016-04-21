import React from 'react';

const FormStacked = ({ children, legend }) => (
  <form className="pure-form pure-form-stacked">
    <fieldset>
      {legend && legend.length ? <legend>{legend}</legend> : ''}

      <div className="pure-g">
        {children || ''}
      </div>
    </fieldset>
  </form>
);

FormStacked.propTypes = {
  children: React.PropTypes.any,
  legend: React.PropTypes.string
};

export default FormStacked;
