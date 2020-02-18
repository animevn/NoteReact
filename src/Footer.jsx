import React from "react";
const time = new Date();
const year = time.getFullYear();

function Footer() {
  return (
      <div className="footer-title">
        <h6 className="text-center">Copyright ©{year}.</h6>
      </div>
  );
}

export default Footer;