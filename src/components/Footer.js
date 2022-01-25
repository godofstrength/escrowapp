import React, { Fragment } from 'react';

export const Footer = () =>  
  <footer id="footer" className="footer">
  <div className="copyright">
    &copy; Copyright {new Date().getFullYear()} <strong><span>{process.env.REACT_APP_WEBSITE_NAME}</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
  </div>
</footer>

