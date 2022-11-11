import React from 'react';
import PropTypes from 'prop-types';
import Paper from './Publication/Paper';

const Publication = ({ data }) => (
  <div className="publication">
    <div className="link-to" id="publication" />
    <div className="title">
      <h3>Publication</h3>
    </div>
    {data.map((paper) => (
      <Paper
        data={paper}
        key={paper.title}
      />
    ))}
  </div>
);

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
  })),
};

Publication.defaultProps = {
  data: [],
};

export default Publication;
