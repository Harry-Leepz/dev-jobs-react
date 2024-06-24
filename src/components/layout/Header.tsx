import BookmarksButton from "../bookmarks/BookmarksButton";
import Logo from "../shared/Logo";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__top'>
        <Logo />
        <BookmarksButton />
      </div>
    </header>
  );
}
