import styled from '@emotion/styled';

export const StatisticsBox = styled.section`
  background-color: white;
  text-align: center;
  margin-top: 10px;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: dimgrey;
`;
export const StatisticsList = styled.ul`
  display: flex;
  color: white;
  list-style: none;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding-inline: 10px;
  border-radius: 4px;
`;
export const Label = styled.span`
  font-size: 20px;
`;
export const Percentage = styled.span`
  font-size: 40px;
`;
