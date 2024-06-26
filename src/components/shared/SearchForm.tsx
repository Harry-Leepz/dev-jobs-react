export default function SearchForm() {
  return (
    <form className='search'>
      <button>
        <i className='fa-solid fa-magnifying-glass' />
      </button>

      <input
        type='text'
        spellCheck='false'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
