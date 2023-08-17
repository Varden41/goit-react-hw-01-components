import styled from '@emotion/styled';
export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 5px 4px 7px -3px #000000;
  padding-right: 70px;
  padding-left: 20px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${p => (p.children ? 'green' : 'red')};
  border-radius: 50%;
  margin-right: 20px;
`;
export const Avatar = styled.img`
  width: 48px;
  margin-right: 10px;
`;
export const Name = styled.p``;
