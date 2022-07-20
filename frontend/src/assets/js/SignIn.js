import React, {Component} from "react";
import "../css/SignIn.css";
import {Form, NavLink} from "react-bootstrap";
import {BiChevronsLeft, BiCopyright, BiUser} from "react-icons/all";
import {Link} from "react-router-dom";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import SignUp from "./SignUp";
import {Redirect} from "react-router";


export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user_name: "",
			password: "",
			user_type: "seller",
			logged: false,
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handle_login = this.handle_login.bind(this);
		this.render_SignUp_Page = this.render_SignUp_Page.bind(this);
	}

	componentDidMount() {
		document.getElementById('signUpPage').hidden = true;
	}


	handleInputChange = (event) => {
		const target = event.target;
		const value = event.target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handle_login = (event) => {

		fetch('http://127.0.0.1:8000/token-auth/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.user_name,
				password: this.state.password,
				type: this.state.user_type,
			}),
		})
			.then(res => {
				console.log(res.status);
				if (res.status === 200) {
					res = res.json();
					res.then(json => {
						if (json.user.type === this.state.user_type) {
							localStorage.setItem('token', json.token);
							this.setState({logged: true});
						} else {
							document.getElementById('loginError').innerText = '*Username or Password incorrect';
						}
					})
				} else if (res.status === 400) {
					document.getElementById('loginError').innerText = '*Username or Password incorrect';
				}
			})

	};

	render_SignUp_Page = (event) => {
		event.preventDefault();
		document.getElementById('signUpPage').hidden = false;
	};

	render() {

		if (this.state.logged === true) {
			return (<Redirect to="/"/>)
		}

		return (
			<div className="login_page">
				<NavLink as={Link} to="/" className="login_page_back_arrow"><BiChevronsLeft/></NavLink>
				<div className="login_null col-xl-8 col-lg-7 col-md-6 "/>
				<div className="login_form_div col-xl-4 col-lg-5 col-md-6 col-sm-12">
					<Form>
						<BiUser className="login_user_icon"/>
						<br/>

						<label className="form-label" id="login_email">User Name</label>
						<input className="form-control" type='text' name="user_name" value={this.user_name}
						       onChange={this.handleInputChange} placeholder="abc@example.com"/>


						<label className="form-label">Password</label>
						<input className="form-control" type='password' name="password"
						       value={this.password} onChange={this.handleInputChange}
						       placeholder="Enter Password"/>


						<label className="form-label">Login As:</label>
						<RadioGroup className="user_radio_opt" aria-label="user_type" name="user_type"
						            value={this.user_type} defaultValue='seller'
						            onChange={this.handleInputChange}>
							<FormControlLabel value="seller" control={<Radio/>} label="Seller"/>
							<FormControlLabel value="buyer" control={<Radio/>} label="Buyer"/>
						</RadioGroup>

						<p id='loginError'>.</p>

						<NavLink as={Link} to="/" className="login_btn login_back">
							<button className="btn" type="button">Back</button>
						</NavLink>

						<NavLink as={Link} className="login_btn login_submit">
							<button className="btn" type="submit" onClick={this.handle_login}>Login</button>
						</NavLink>


						<div className="row">
							<button className="btn login_forget">Forget Password?</button>

							<button className="btn login_signup" onClick={this.render_SignUp_Page}>Create New Account
							</button>
						</div>

						<p>Copyright <BiCopyright className="login_copyright_icon"/> E-Farm 2021 | The Ascenders</p>
					</Form>
				</div>
				<div id='signUpPage'>
					<SignUp/>
				</div>
			</div>
		)
	}
}