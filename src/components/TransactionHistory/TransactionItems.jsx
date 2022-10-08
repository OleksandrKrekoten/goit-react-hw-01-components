import PropTypes from 'prop-types';
import{TableRow} from './TransactionItems.styled'
export const TransactionItems = ({ type, amount, currency }) => {
    return <tr >
              <TableRow>{type}</TableRow>
              <TableRow>{amount}</TableRow>
              <TableRow>{currency}</TableRow>
            </tr>
}
TransactionItems.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};