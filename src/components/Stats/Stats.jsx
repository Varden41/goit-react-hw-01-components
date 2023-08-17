import PropTypes from 'prop-types';
import { randomColor } from 'utils/colorRandom';
import {
  StatisticsBox,
  Title,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
} from './Stats.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      <Title>{title}</Title>
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            style={{ backgroundColor: `#${randomColor()}` }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
