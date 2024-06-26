type SearchFormProps = {
  searchText: string;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm({
  searchText,
  onSubmitHandler,
  onChangeHandler,
}: SearchFormProps) {
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
