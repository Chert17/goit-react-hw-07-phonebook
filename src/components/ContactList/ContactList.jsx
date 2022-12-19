import PropTypes from 'prop-types';
import { ContactList, ContactItem } from './ContactsList.styled';
import { Btn } from 'components/ContactForm/ContactForm.styled';

export function ContactsList({ contacts, onDelete }) {
  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Btn
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Btn>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
}

ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
