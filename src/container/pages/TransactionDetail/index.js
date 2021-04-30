/* eslint-disable camelcase */
// TransactionDetail Component
// --------------------------------------------------------
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FaInbox } from 'react-icons/fa';
import Landing from 'container/templates';
import {
  H1, Button
} from 'components';
import { formatAmount, formatDate } from 'utils/helper';
import './styles.scss';

const TransactionDetail = ({ location }) => {
  const history = useHistory();

  const {
    query: {
      beneficiary_name, beneficiary_bank, id, status, sender_bank, account_number, amount, remark, created_at, unique_code
    }
  } = location;

  return (
    <Landing>
      <div className="p-transaction-detail">
        <div className="p-transaction-header">
          <H1>Daftar Transaksi</H1>
        </div>
        <div className="p-transaction-title">
          <div className="p-transaction-id">ID TRANSAKSI: #{id}</div>
          <div className={`p-transaction-status ${status.toLowerCase()}`}>{status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</div>
        </div>
        <div className="p-transaction-content">
          <div className="p-transaction-logo">
            <FaInbox />
          </div>
          <div className="p-transaction-content-wrapper">

            <div className="p-transaction-wrapper">
              <div className="p-transaction-text">
                PENGIRIM
              </div>
              <div className="p-transaction-value">
                {sender_bank}
              </div>
            </div>
            <div className="p-transaction-wrapper">
              <div className="p-transaction-text">
                PENERIMA
              </div>
              <div className="p-transaction-value">
                <div>
                  {beneficiary_bank}
                </div>
                <div>
                  {account_number}
                </div>
                <div>
                  {beneficiary_name}
                </div>
              </div>
            </div>
            <div className="p-transaction-wrapper">
              <div className="p-transaction-text">
                NOMINAL
              </div>
              <div className="p-transaction-value">
                {formatAmount(amount)}
              </div>
            </div>
            <div className="p-transaction-wrapper">
              <div className="p-transaction-text">
                CATATAN
              </div>
              <div className="p-transaction-value">
                {remark}
              </div>
              <div className="p-transaction-unique_code">
                Kode Unik : <span>{unique_code}</span>
              </div>
            </div>
            <div className="p-transaction-wrapper">
              <div className="p-transaction-text">
                WAKTU DIBUAT
              </div>
              <div className="p-transaction-value">
                {formatDate(created_at)}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button onClick={() => history.goBack()}>Kembali</Button>
        </div>
      </div>

    </Landing>

  );
};

TransactionDetail.propTypes = {
  location: PropTypes.object
};

TransactionDetail.defaultProps = {
  location: {}
};

export default TransactionDetail;
