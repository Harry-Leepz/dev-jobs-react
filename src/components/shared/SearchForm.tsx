type SearchFormProps = {
  searchText: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({
  searchText,
  onChangeHandler,
}: SearchFormProps) {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
