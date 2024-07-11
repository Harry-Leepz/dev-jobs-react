import { useSearchTextContext } from "../../hooks/useContextProviders";

export default function SearchForm() {
  const { onSearchTextChange, searchText } = useSearchTextContext();
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTextChange(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className='search'>
      <button>
        <i className='fa-solid fa-magnifying-glass' />
      </button>

      <input
        onChange={onChangeHandler}
        value={searchText}
        type='text'
        spellCheck='false'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
