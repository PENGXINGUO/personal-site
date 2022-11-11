import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Gallery/Cell';
import data from '../data/gallery';

const Gallery = () => (
  <Main
    title="Gallery"
    description="Learn about Catherine's Gallery."
  >
    <article className="post" id="Gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/gallery">Gallery</Link></h2>
          <p>A phototaxis girl&apos;s gallery will never let you down.</p>
        </div>
      </header>
      {data.map((gallery) => (
        <Cell
          data={gallery}
          key={gallery.title}
        />
      ))}
    </article>
  </Main>
);

export default Gallery;
