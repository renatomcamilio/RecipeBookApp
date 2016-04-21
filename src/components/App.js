import React from 'react';
import Home from '../pages/Home';

const App = ({ children }) => (
  <div className="pure-g">
    <div className="pure-u-2-24 pure-u-lg-4-24"></div>
    <div className="pure-u-20-24 pure-u-lg-16-24">
      {children}
    </div>
    <div className="pure-u-2-24 pure-u-lg-4-24"></div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
