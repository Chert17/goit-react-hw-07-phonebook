import { Spinner } from 'components/Spinner/Spinner';
import { useForm } from 'react-hook-form';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactSlice';
import { Form, FormItem, InputName, Btn } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyStyle = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export function ContactForm() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery('');

  async function onSubmit(data, e) {
    e.preventDefault();
    if (contacts.find(contact => contact.name === data.name)) {
      const notify = () =>
        toast(`${data.name} is alredy in contacts`, notifyStyle);
      return notify();
    }
    addContact(data);

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
          <InputName>Phone</InputName>
          <input
            type="tel"
            {...register('phone')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormItem>
        <Btn disabled={isLoading} type="submit">
          {isLoading && <Spinner />} Add contact
        </Btn>
        <ToastContainer />
      </Form>
    </>
  );
}
