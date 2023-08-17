import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-align: center;
`;
export const TransactionHead = styled.thead`
  background-color: turquoise;
  color: white;
  font-size: 24px;
`;

export const TableHeadItem = styled.th`
  padding-inline: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const TableRow = styled.tr`
  padding-inline: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TableBody = styled.tbody`
  font-size: 22px;
`;
export const TableRowItem = styled.tr`
  &:nth-child(n) {
    background-color: white;
  }
  &:nth-child(2n) {
    background-color: rgb(223, 223, 223);
  }
`;
