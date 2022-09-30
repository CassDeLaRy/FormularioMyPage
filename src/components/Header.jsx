import logo from '../assets/img/englishIcon.svg'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img id="logoHeader" src={logo}></img>
        <h1>English Grammar in Use: Sign up</h1>
    </header>
  );
}
export default Header;
