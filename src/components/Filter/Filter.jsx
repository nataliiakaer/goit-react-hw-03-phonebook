import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import F from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const inputID = nanoid();

  return (
    <label htmlFor={inputID}>
      Find contacts by name
      <br />
      <input
        type="text"
        id={inputID}
        value={value}
        onChange={onChange}
        className={F.inputFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
