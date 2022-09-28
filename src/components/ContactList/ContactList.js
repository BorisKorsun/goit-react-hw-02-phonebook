import PropTypes from 'prop-types';

import ContactItem from './ContactItem/ContactItem';

function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return <ContactItem
                    contact={{ id, name, number }}
                    key={id}
                    onDelete={onDelete}
                />
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default ContactList;