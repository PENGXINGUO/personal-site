import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/kitty1.jpeg`} alt="" />
      </Link>
      <header>
        <h2>XINGUO (CATHERINE) PENG</h2>
        <p><a href="mailto:xp62@cornell.edu">xp62@cornell.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am a second-year <a href="https://dyson.cornell.edu/">MPS-Applied Economics and Management </a>
        graduate at Cornell. Before that, I was working
        at <a href="http://www.cs.ecitic.com/newsite/en/">CITICS </a>for two years as a Senior Financial Advisor.
        I am passionate in Capital Market Equity Research, and Wealth Management.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Xinguo (Catherine) Peng.</p>
    </section>
  </section>
);

export default SideBar;
