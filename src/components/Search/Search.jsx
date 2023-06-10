import { StyledSearchWrap, StyledSearchInput } from './Search.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/phone/phoneSlice';

export const Search = () => {
  const dispatcher = useDispatch();
  const handleChange = e => {
    dispatcher(setFilter(e.target.value));
  };
  return (
    <StyledSearchWrap>
      <h3
        style={{
          color: '#757575',
        }}
      >
        Search contact by name
      </h3>
      <StyledSearchInput
        type="text"
        onChange={handleChange}
        placeholder="enter name here"
      />
    </StyledSearchWrap>
  );
};
