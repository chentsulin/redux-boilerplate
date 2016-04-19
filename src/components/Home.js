import React, { PropTypes } from 'react';


const Home = ({ children }) =>
  <div>
      {/* this will render the child routes */}
      {children}
  </div>


Home.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Home
