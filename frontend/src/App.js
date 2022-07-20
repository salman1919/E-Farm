import {Component} from "react";
import Header from "./component/header/header";
import Home from "./assets/js/Home";
import About from "./assets/js/About";
import Features from "./assets/js/Features";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import SignIn from "./assets/js/SignIn";
import SellerDashboard from "./assets/js/SellerDashboard";
import HeaderSeller from "./component/header/headerseller";
import HeaderBuyer from "./component/header/headerbuyer";
import BuyerDashboard from "./assets/js/BuyerDashboard";

export default class App extends Component {

	render() {
		return (
			<div className="app_div">
				<Router>

					<Switch>
						<Route exact path="/login">
							<SignIn/>
						</Route>
						<Route exact path="/sellerdashboard">
							<HeaderSeller/>
							<SellerDashboard/>
						</Route>

						<Route exact path="/buyerdashboard">
							<HeaderBuyer/>
							<BuyerDashboard/>
						</Route>

						<Route path="/">
							<Header/>
							<Home/>
							<Features/>
							<About/>
						</Route>
					</Switch>
				</Router>

			</div>
		);
	}
}
