import React from 'react';
import PropTypes from 'prop-types';

import Interest from './Extracurricular/Interest';

const Extracurricular = ({ data }) => (
  <div className="extracurricular">
    <div className="link-to" id="extracurricular" />
    <div className="title">
      <h3>Extracurricular</h3>
    </div>
    {data.map((interest) => (
      <Interest
        data={interest}
        key={interest.category}
      />
    ))}
  </div>
);

Extracurricular.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    content: PropTypes.string,
  })),
};

Extracurricular.defaultProps = {
  data: [],
};

export default Extracurricular;
