import PropTypes from 'prop-types';

function ContactItem({ contact, onDelete }) {
    const { id, name, number } = contact;
    
    return(
        <li>
            <p>{name}: {number}</p>
            <button
                type='button'
                id={id}
                onClick={(e) => {
                onDelete(e.target.id)
                }}
            >Delete</button>
        </li>
    )
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};


export default ContactItem;

