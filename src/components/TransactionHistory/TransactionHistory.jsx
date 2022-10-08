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


