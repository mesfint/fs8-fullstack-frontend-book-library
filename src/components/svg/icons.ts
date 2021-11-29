import Logo from './icons/logo.png'
import Home from './icons/home.svg'
import Books from './icons/books.svg'
import Users from './icons/users.svg'
import Authors from './icons/authors.svg'
import Burger from './icons/burger.svg'
import Close from './icons/close.svg'

export type IconType =
  | 'logo'
  | 'home'
  | 'books'
  | 'users'
  | 'authors'
  | 'burger'
  | 'close'
// Record => Constructs an object type whose property keys are Keys and whose property
//values are Type. This utility can be used to map the properties of a type to another type.
export type IconMappingType = Record<IconType, string>
const icons: IconMappingType = {
  logo: Logo,
  home: Home,
  books: Books,
  users: Users,
  authors: Authors,
  burger: Burger,
  close: Close,
}
export default icons
