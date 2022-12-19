import PropTypes from 'prop-types';
import { Field } from './Filter.styled';
import { FormItem } from 'components/ContactForm/ContactForm.styled';

export function Filter({ filter, onChange }) {
  return (
    <>
      <FormItem>
        Find contact by name
        <Field
          type="text"
          name="filter"
          value={filter}
          onChange={evt => {
            onChange(evt.target.value);
          }}
        />
      </FormItem>
    </>
  );
}

Filter.protoTypes = {
  filter: PropTypes.string.isRequired,
};
