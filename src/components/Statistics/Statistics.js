import PropTypes from 'prop-types';

import { StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <li className="item">Good: {good}</li>
      <li className="item">Neutral: {neutral}</li>
      <li className="item">Bad: {bad}</li>
      <li className="item">Total: {total}</li>
      <li className="item">Positive feedback: {positivePercentage}%</li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
