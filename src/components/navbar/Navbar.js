import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsChat} from 'react-icons/bs';
import {BsBell} from 'react-icons/bs';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       <GiHamburgerMenu color="rgb(216, 212, 207)" size="24px"/>
      </div>
      <div className="navbar__right">
        <a href="#">
         <BsChat color=" #a5aaad" size="24px"/>
        </a>
        <a href="#">
         <BsBell color=" #a5aaad" size="24px"/>
        </a>
        <a href="#!">
          <img width="30" src="https://github.com/joaovictorcamargo.png" alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;