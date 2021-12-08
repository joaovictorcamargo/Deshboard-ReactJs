import './Sidebar.css';
import toplogo from '../../assets/toplogo.png';
import {FaRegChartBar} from 'react-icons/fa';
import {CgArrowsExpandUpRight} from 'react-icons/cg';
import {BsBullseye} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {TiClipboard} from 'react-icons/ti';
import {BiCog} from 'react-icons/bi';
import {BsBell} from 'react-icons/bs';
 
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={toplogo} alt="toplogo" />
            
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
    
           </div>
           
           <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
              <FaRegChartBar/>
                  <a href="#">Dashboard</a>
              </div>    
              <div className="sidebar__link">
              <CgArrowsExpandUpRight/>
                  <a href="#">Leads</a>
              </div>

              <div className="sidebar__link">
              <BsBullseye/>
                  <a href="#">Campanhas</a>
              </div>

              <div className="sidebar__link">
              <AiOutlineShoppingCart/>
                  <a href="#">Vendas</a>
              </div>

              <div className="sidebar__link">
              <AiOutlineUser/>
                  <a href="#">Clientes</a>
              </div>

              <div className="sidebar__link">
              <TiClipboard/>
                  <a href="#">Cobrança</a>
              </div>

              <div className="sidebar__link">
              <BiCog/>
                  <a href="#">Configurações</a>
              </div>

              
           </div> 

       </div>
   )
}

export default Sidebar;