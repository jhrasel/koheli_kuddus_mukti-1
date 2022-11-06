import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyrights">
          <span>Copyright © {new Date().getFullYear()}</span>
          <h6 className="bn">| কোহেলী কুদ্দুস মুক্তি</h6>
        </div>
        <div className="rights">All rights reserved!</div>
      </div>
    </footer>
  );
}
