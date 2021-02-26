import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={s.list}>
      <li>
        <span>
          Good:
          {good}
        </span>
      </li>
      <li>
        <span>
          Neutral:
          {neutral}
        </span>
      </li>
      <li>
        <span>
          Bad:
          {bad}
        </span>
      </li>
      <li>
        <span>
          Total:
          {total}
        </span>
      </li>
      <li>
        <span>
          Percentage:
          {percentage}%
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
