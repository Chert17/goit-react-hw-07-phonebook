import { useRemoveContactMutation } from 'redux/contactSlice';
import { Btn } from 'components/ContactForm/ContactForm.styled';
import { ContactItemStyle } from 'components/ContactList/ContactsList.styled';
import { Spinner } from 'components/Spinner/Spinner';

export function ContactItem({ id, name, phone }) {
  const [removeContact, { isLoading }] = useRemoveContactMutation();

  return (
    <>
      <ContactItemStyle key={id}>
        {name}: {phone}
        <Btn
          onClick={() => removeContact(id)}
          disabled={isLoading}
          type="button"
        >
          {isLoading && <Spinner />}
          Delete
        </Btn>
      </ContactItemStyle>
    </>
  );
}
