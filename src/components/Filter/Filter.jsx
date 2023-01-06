import PropTypes from 'prop-types';
import { Field } from './Filter.styled';
import { FormItem } from 'components/ContactForm/ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <FormItem>
        Find contact by name
        <Field
          type="text"
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </FormItem>
    </>
  );
}

Filter.protoTypes = {
  filter: PropTypes.string.isRequired,
};
