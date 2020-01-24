import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="text-center">
          <p>
            &copy; <strong>Алексей Зеленский </strong>
          </p>
          <div className="credits">
            Created with template by <a href="#">Vito Technology</a>
          </div>
          <a href="" className="go-top">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  )
};
export default Footer;
