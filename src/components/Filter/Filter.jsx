import PropTypes from 'prop-types';
import { Field } from './Filter.styled';
import { FormItem } from 'components/ContactForm/ContactForm.styled';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Filter() {
  const filter = useSelector(state => state.filter.filter);
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
