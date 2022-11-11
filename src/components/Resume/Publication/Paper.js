import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ data }) => (
  <article className="paper-container">
    <header>
      <h4 className="paper-title"><a href={data.link}>{data.title}</a></h4>
    </header>
    <p className="paper-author">{data.author}, {data.journal}, {data.year}</p>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Paper;
