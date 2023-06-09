import { Search } from 'components/Search/Search';
import { FormAdd } from 'components/FormAdd/FormAdd';
import { ContactList } from 'components/ContactList/ContactList';
export const ContactsPage = () => {
  return (
    <>
      <FormAdd />
      <Search />
      <ContactList />
    </>
  );
};
