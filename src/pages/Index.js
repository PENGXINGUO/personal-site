import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to the cutest person&apos;s website.</Link></h2>
          <p>Delight to meet you here ٩(˃̶͈̀௰˂̶͈́)و</p>
          {/* <p>I&apos;m Xinguo (Catherine) Peng, a phototaxis girl.</p> */}
        </div>
      </header>
      <p>
        A second-year MPS-Applied Economics and Management
        student at Cornell Dyson School of Economics
        with an interest in Capital Market, Equity Research,
        and Wealth Management. Seeking a full-time
        job this December to apply my experience assisting
        the firm&apos;s clients through conducting data
        analysis, capital valuation, asset allocation and research.
      </p>
      <p>
        I am a good communicator, analyst, and team player.
      </p>
      <p>
        I have extensive experience in wealth management
        and marketing services and specializes in
        secondary market wealth management, asset allocation
        and family trust. I&apos;m familiar with many
        kinds of trading strategies and tools. Good at
        tracking and analyzing data, writing research
        reports, and drawing decks.
      </p>
      <p>
        I have published 5 papers on different journals
        and conferences. Strong research ability and
        can delve into the industry in a short period of
        time with interdisciplinary tools and skills.
        CFA I ,FRM I II candidate.
      </p>
      <p>
        I can also add in the application of behavioral
        economics in branding, marketing, and communication.
        Have experience of multiple salons and conferences
        holding. I have an international background
        in China, Hong Kong, the United States, the United
        Kingdom, Poland and other European countries
        have study and work experience. Fluent in Mandarin,
        English, as well as Chinese dialects, basic
        Japanese and French.
      </p>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/PENGXINGUO/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
