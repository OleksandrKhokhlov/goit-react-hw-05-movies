import { FcSearch } from 'react-icons/fc';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {

  
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">
          <FcSearch size={25} /> Search
        </SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
};
