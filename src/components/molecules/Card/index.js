// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({ status }) => {
  const classNameIndicataor = `m-card-indicator ${status.toLowerCase()}`;
  const classStatus = `m-card-status ${status.toLowerCase()}`;
  return (
    <div className="m-card">
      <div className={classNameIndicataor} />
      <div className="m-card-container-left">
        <div className="m-card-title">
          BCA &#8594; Mandiri
        </div>
        <div className="m-card-name">
          Bambang Hassan
        </div>
        <div className="m-card-amount">
          Rp1.000.000&bull;<span className="m-card-date">1 Januari 2020</span>
        </div>
      </div>
      <div className="m-card-container-right">
        <div className={classStatus}>Berhasil</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  status: PropTypes.string
};

Card.defaultProps = {
  status: 'success'
};

export default Card;
