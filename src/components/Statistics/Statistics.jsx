import PropTypes from 'prop-types';
import {
  Container,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

import { getRandomHexColor } from '../../utils/randomColor';

const StatsData = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(stat => (
          <StatListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
};
StatsData.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default StatsData;
