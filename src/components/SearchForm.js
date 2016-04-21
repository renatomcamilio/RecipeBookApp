import React from 'react';
import Form from './Form';
import Button from './Button';

const SearchForm = () => (
  <div className="pure-u-1">
    <Form>
      <div className="pure-u-4-5">
        <input type="text" className="pure-u-23-24 pure-input-rounded" name="search" placeholder="Search Recipe" />
      </div>
      <div className="pure-u-1-5">
        <Button type="primary" icon="search" />
      </div>
    </Form>
  </div>
);

export default SearchForm;
