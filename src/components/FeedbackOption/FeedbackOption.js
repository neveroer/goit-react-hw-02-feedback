import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

function FeedbackOption({ options, onClickOption }) {
  const types = Object.keys(options);
  return (
    <div className={s.container}>
      {types.map(type => {
        return (
          <button
            className={s.button}
            key={type}
            type="button"
            onClick={() => onClickOption(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOption;
