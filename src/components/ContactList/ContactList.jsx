import PropTypes from 'prop-types';
import { ContactList, ContactItem } from './ContactsList.styled';
import { Btn } from 'components/ContactForm/ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  function filterContacts() {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }

  return (
    <>
      <ContactList>
        {filterContacts().map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Btn type="button" onClick={() => dispatch(removeContact(id))}>
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
