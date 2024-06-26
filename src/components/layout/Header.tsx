import BookmarksButton from "../bookmarks/BookmarksButton";
import Logo from "../shared/Logo";
import SearchForm from "../shared/SearchForm";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__top'>
        <Logo />
        <BookmarksButton />
      </div>
      <SearchForm />
    </header>
  );
}
