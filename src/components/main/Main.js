import "./Main.css";
import avatar from "../../assets/avatar.svg";
import Chart from "../charts/Chart";
import { AiOutlineShoppingCart, AiFillCaretDown, AiFillCaretUp, AiOutlineBarChart, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineAttachMoney } from 'react-icons/md';

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
							<div className="text-icon">
								<AiOutlineShoppingCart color="blue" size="20" />
								<p className="text-primary-p">Vendas</p>
							</div>
							<span className="font-bold text-title">245</span>

							<div className="text-icon center">
								<AiFillCaretUp color="#27db21" size="20" />
								<p className="text-primary-p">12,67%</p>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card_inner">
							<div className="text-icon">
								<MdOutlineAttachMoney color="#27db21" size="20" />
								<p className="text-primary-p">Faturamento</p>
							</div>
							<span className="font-bold text-title">R$ 12.167.943</span>

							<div className="text-icon center">
								<AiFillCaretDown color="#c00" size="20" />
								<p className="text-primary-p">4,67%</p>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card_inner">
							<div className="text-icon">
								<AiOutlineBarChart color="#efe13b" size="20" />
								<p className="text-primary-p">Conversão</p>
							</div>
							<span className="font-bold text-title">12%</span>

							<div className="text-icon center">
								<AiFillCaretDown color="#c00" size="20" />
								<p className="text-primary-p">21,67%</p>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card_inner">
							<div className="text-icon">
								<AiOutlineUser color="#7121db" size="20" />
								<p className="text-primary-p">Leads</p>
							</div>
							<span className="font-bold text-title">432</span>

							<div className="text-icon center">
								<AiFillCaretDown color="#c00" size="20" />
								<p className="text-primary-p">11,34%</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- MAIN CARDS ENDS HERE --> */}

				{/* <!-- CHARTS STARTS HERE --> */}
				<div className="charts">
					<div className="charts__left">
						<div className="charts__left__title">
							<div>
								<p> <MdOutlineAttachMoney color="#27db21" size="20" /> Faturamento vs Custo Fixo</p>
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