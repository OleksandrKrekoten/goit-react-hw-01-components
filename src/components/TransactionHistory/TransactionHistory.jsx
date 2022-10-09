import PropTypes from 'prop-types';
import { TransactionItems } from './TransactionItems';
import { TableColumnHeader } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <TableColumnHeader>TYPE</TableColumnHeader>
            <TableColumnHeader>AMOUNT</TableColumnHeader>
            <TableColumnHeader>CURRENCY</TableColumnHeader>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItems
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
