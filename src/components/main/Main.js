import "./Main.css";
import avatar from "../../assets/avatar.svg";
import Chart from "../charts/Chart";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineAttachMoney} from 'react-icons/md';

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
           
              <div className="icon-category" style={{flexDirection: "colum"}}>
              <AiOutlineShoppingCart/>
              <p className="text-primary-p">Vendas</p>
              </div>
              <span className="font-bold text-title">245</span>
              <h1 className="text-primary-p">12,67%</h1>
            
          </div>

          <div className="card">
            
            <div className="card_inner">
            <p className="text-primary-p">Faturamento</p>
              <span className="font-bold text-title">R$12.167.943</span>
              <p className="text-primary-p">4,67%</p>
            </div>
          </div>

          <div className="card">
           
            <div className="card_inner">
            <p className="text-primary-p">Conversão</p>
              <span className="font-bold text-title">12%</span>
              <p className="text-primary-p">21,67%</p>
            </div>
          </div>

          <div className="card">
           
         
            <div className="card_inner">
            <p className="text-primary-p">Leads</p>
              <span className="font-bold text-title">432</span>
              <p className="text-primary-p">11,34%%</p>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <p> <MdOutlineAttachMoney color="#27db21" size="20"/> Faturamento vs Custo Fixo</p>
              </div>
              
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