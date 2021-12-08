import "./Main.css";
import avatar from "../../assets/avatar.svg";
import Chart from "../charts/Chart";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Indicadores</h1>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <div className="icon-category">
              <AiOutlineShoppingCart/>
              <p className="text-primary-p">Vendas</p>
              </div>
              <span className="font-bold text-title">245</span>
              <h1 className="text-primary-p">12,67%</h1>
            </div>
          </div>

          <div className="card">
            
            <div className="card_inner">
            <p className="text-primary-p">Vendas</p>
              <span className="font-bold text-title">245</span>
              <p className="text-primary-p">12,67%</p>
            </div>
          </div>

          <div className="card">
           
            <div className="card_inner">
            <p className="text-primary-p">Vendas</p>
              <span className="font-bold text-title">245</span>
              <p className="text-primary-p">12,67%</p>
            </div>
          </div>

          <div className="card">
           
         
            <div className="card_inner">
            <p className="text-primary-p">Vendas</p>
              <span className="font-bold text-title">245</span>
              <p className="text-primary-p">12,67%</p>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

   
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;