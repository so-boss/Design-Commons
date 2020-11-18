import React from "react";
import { Link } from "gatsby";
import './Footer.scss';

export default function Footer ({pages, children}) {

  return (
    <div page="footer">
      <div layout="columns">
        <div column="1">
          <div type="title">Guidelines</div>
          <div type="links">
            <Link to="/guidelines/color">Color</Link>
            <Link to="/guidelines/typography">Typography</Link>
            <Link to="/guidelines/icons">Icons</Link>
          </div>
        </div>
        <div column="2" />
        <div column="3" />
      </div>
      {children}
    </div>
  );
}
