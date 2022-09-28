import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
 
function ContactForm ({ onSubmit, options, }) {
  return (
    <Formik onSubmit={onSubmit} initialValues={options}>
      <Form>
        <label> Name
          <Field
            autoComplete='off'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Field>
        </label>
        <label> Number
          <Field
            autoComplete='off'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Field>
        </label>
        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    options: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
};

export default ContactForm;