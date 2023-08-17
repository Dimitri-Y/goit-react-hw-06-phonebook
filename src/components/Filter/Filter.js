import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;

    dispatch(changeFilter(value));
  };
  return (
    <div className={css['div']}>
      <p className={css['p']}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
        className={css['input']}
      />
    </div>
  );
};

export default Filter;
