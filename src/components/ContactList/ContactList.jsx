import PropTypes from 'prop-types';
import { ContactList } from './ContactsList.styled';

import { useGetContactsQuery } from '../../redux/contactSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/Contactstem/ContactItem';

export function ContactsList() {
  const filter = useSelector(state => state.filter.filter);

  const { currentData, isError, isFetching } = useGetContactsQuery(filter);

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching && !currentData) return <h2>Loading...</h2>; //<Skeleton />

  return (
    <>
      <ContactList>
        {!currentData ? (
          <p>contacts list is empty</p>
        ) : (
          currentData.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))
        )}
      </ContactList>
    </>
  );
}

ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
