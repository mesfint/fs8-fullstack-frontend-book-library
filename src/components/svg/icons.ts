import Logo from './icons/logo.png';
import Home from './icons/home.svg';
import Books from './icons/books.svg';
import Users from './icons/users.svg';
import Burger from './icons/burger.svg';
import Close from './icons/close.svg';

export type IconType = 'logo' | 'home' | 'books' | 'users' | 'burger' | 'close';
export type IconMappingType = Record<IconType, string>
const icons: IconMappingType = {
  logo: Logo,
  home: Home,
  books: Books,
  users: Users,
  burger: Burger,
  close: Close
}
export default icons
