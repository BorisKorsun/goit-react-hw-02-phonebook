import PropTypes from 'prop-types';

function Filter({onChange}) {
    return (
        <label>
            Find contacts by name
            <input autoComplete='off' onChange={onChange} type='text'></input>
        </label>
    )
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;