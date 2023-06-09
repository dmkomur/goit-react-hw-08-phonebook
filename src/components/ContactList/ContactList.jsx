import {
  StyledContact,
  StyledBtnDel,
  StyledContactList,
} from './ContactList.Styled';
import { useEffect } from 'react';
import { selectPhones, selectFilter } from '../../Redux/phoneSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { delContactThunk } from 'Redux/phoneOperations';
import { fetchContactsThunk } from 'Redux/phoneOperations';
import { MdDelete } from 'react-icons/md';

export const ContactList = ({ fileList }) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchContactsThunk());
  }, [dispatcher]);
  const contacts = useSelector(selectPhones);
  const currentFilter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(currentFilter.toLocaleLowerCase())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(el => (
        <StyledContact key={el.id}>
          <span style={{ color: '#757575', fontWeight: '500' }}>
            {el.name}: {el.number}
          </span>
          <StyledBtnDel onClick={() => dispatcher(delContactThunk(el.id))}>
            <MdDelete />
          </StyledBtnDel>
        </StyledContact>
      ))}
    </StyledContactList>
  );
};
