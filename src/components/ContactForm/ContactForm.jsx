import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

import { Form, FormItem, InputName, Btn } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  function onSubmit(data, e) {
    e.preventDefault();
    dispatch(addContact(data));
    reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormItem>
          <InputName>Name</InputName>
          <input
            type="text"
            {...register('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormItem>
        <FormItem>
          <InputName>Number</InputName>
          <input
            type="tel"
            {...register('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormItem>
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
}
