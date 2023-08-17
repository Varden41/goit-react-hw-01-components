import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TableHeadItem,
  TableBody,
  TableRowItem,
} from './Transactions.styled';
const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TransactionHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRowItem key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRowItem>
          );
        })}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.porpTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
