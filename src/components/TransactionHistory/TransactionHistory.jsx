import PropTypes from 'prop-types';
import { TransactionItems } from "./TransactionItems";

export const TransactionHistory = ({ items }) => {
  return (
    <div >
      <table>
        <thead >
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({id, type, amount, currency})=> (
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
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
