import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  font-size: 16px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: #fff;
`;

export const DescriptionBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-inline: 10px;
`;
export const Avatar = styled.img`
  width: 280px;
  height: auto;
`;
export const Name = styled.p`
  font-size: 24px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: grey;
`;
export const Location = styled.p`
  font-size: 18px;
  color: grey;
`;

export const Stats = styled.ul`
  justify-content: space-between;
  display: flex;
  border: 1px solid grey;
  list-style: none;
  margin: 10px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-inline: 1px solid grey;
`;
export const Label = styled.span`
  font-size: 20px;
`;
export const Quantity = styled.span`
  font-size: 20px;
`;
