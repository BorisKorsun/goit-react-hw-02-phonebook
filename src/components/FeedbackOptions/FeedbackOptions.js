import PropTypes from 'prop-types';

function FeedbackOptions ({options, onLeaveFeedback}) {
    return options.map((button) => {
        return (
            <button
                key={button}
                type='button'
                name={button}
                onClick={onLeaveFeedback}
            >{button}</button>
        )
    })
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;