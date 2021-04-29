// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, formatAmount } from 'utils/helper';
import './styles.scss';

const Card = ({ data }) => {
  const classNameIndicataor = `m-card-indicator ${data.status.toLowerCase()}`;
  const classStatus = `m-card-status ${data.status.toLowerCase()}`;
  return (
    <div className="m-card">
      <div className={classNameIndicataor} />
      <div className="m-card-container-left">
        <div className="m-card-title">
          {data.sender_bank} &#8594; {data.beneficiary_bank}
        </div>
        <div className="m-card-name">
          {data.beneficiary_name}
        </div>
        <div className="m-card-amount">
          {formatAmount(data.amount)} &bull; <span className="m-card-date">{formatDate(data.created_at)}</span>
        </div>
      </div>
      <div className="m-card-container-right">
        <div className={classStatus}>{data.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

Card.defaultProps = {
  data: {}
};

export default Card;
