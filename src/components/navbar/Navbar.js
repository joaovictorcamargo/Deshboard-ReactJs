import React, {useState }from 'react';
import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsChat} from 'react-icons/bs';
import {BsBell} from 'react-icons/bs';

function App() {
  return (
      <Navbar>  
         
         <NavItem icon={ <BsChat style={{ color:"#a5aaad", width: 23, height: 23}} />}/>
        <NavItem icon={<BsBell style={{ color:"#a5aaad", width: 23, height: 23}}/>}/>
  
        <NavItem icon={<img style={{width: 30, borderRadius: 15}} src="https://github.com/joaovictorcamargo.png" alt="avatar" />}>
          <DropdownMenu/>
        </NavItem>

      </Navbar>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
     return (
       <a href='#' className="menu-item">
       

         {props.children}

         

       </a>
     )
  }

  return( 
    <div className="dropdown">
      <DropdownItem><p style={{color:"#a5aaad"}}>Meus Dados</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Alterar Senha</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Planos</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Serviços</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Dúvidas Frequentes</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Contato</p></DropdownItem>

      <DropdownItem><p style={{color:"#a5aaad"}}>Sair</p></DropdownItem>

    </div>
  ) 
}
  

function Navbar(props) {
  return (
    
     <nav className="navbar">
       <div className="navbar-nav">
       <ul >{props.children}</ul>
       </div>
     </nav>

  );
}

function NavItem(props) {

const [open, setOpen] = useState(false);
  
  return (
    <li className="nav-item">
      {/*flip open value to the opposite*/}
      <a href='#' className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
{/*if it is opened show the props, otherwise do nothing*/}
      {open && props.children}
    </li>
    
  );
}

export default App;