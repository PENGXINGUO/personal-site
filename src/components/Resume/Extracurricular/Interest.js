import React from 'react';
import PropTypes from 'prop-types';

const Interest = ({ data }) => (
  <article className="interest-container">
    <header>
      <h4 className="interest-category">{data.category} : </h4>
    </header>
    <p className="interest-content">{data.content}</p>
  </article>
);

Interest.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Interest;
