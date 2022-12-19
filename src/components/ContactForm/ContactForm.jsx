import { Formik, Field } from 'formik';
// import * as yup from 'yup';
import PropTypes from 'prop-types';

import { FormStyle, FormItem, Btn, InputName } from './ContactForm.styled';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required().positive().integer(),
// });

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm({ addContact }) {
  function handleSubmit(values, actions) {
    addContact(values);
    actions.resetForm();
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyle autoComplete="off">
          <FormItem>
            <InputName>Name</InputName>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormItem>
          <FormItem>
            <InputName>Number</InputName>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormItem>
          <Btn type="submit">Add contact</Btn>
        </FormStyle>
      </Formik>
    </>
  );
}

ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
