import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Publication from '../components/Resume/Publication';
// import Skills from '../components/Resume/Skills';
import Extracurricular from '../components/Resume/Extracurricular';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import publications from '../data/resume/publications';
import extracurricular from '../data/resume/extracurricular';
import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Publication',
  'Extracurricular',
  // 'Skills',
  // 'Courses',
  // 'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Catherine's resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Publication data={publications} />
      <Extracurricular data={extracurricular} />
      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} />
      <References /> */}

    </article>
  </Main>
);

export default Resume;
