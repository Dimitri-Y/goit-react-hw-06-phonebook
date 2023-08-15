import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ filter, filterChange }) => {
  return (
    <div className={css['div']}>
      <p className={css['p']}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={filterChange}
        className={css['input']}
      />
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
