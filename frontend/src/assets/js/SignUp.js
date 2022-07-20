import React, {Component} from "react";
import "../css/SignUp.css";
import {BiChevronsLeft} from "react-icons/all";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

export default class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {

			first_name: "",
			last_name: "",
			email: "",
			password: "",
			user_name: "",
			user_type: "seller",
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.closeSignUp = this.closeSignUp.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleInputChange = (event) => {
		const target = event.target;
		const value = event.target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	closeSignUp = () => {
		document.getElementById('signUpPage').hidden = true;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.user_name === "" || this.state.first_name === "" || this.state.last_name === "" || this.state.password === "") {
			alert("*All fields are required");
		} else {
			fetch('http://localhost:8000/api/users/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.user_name,
					password: this.state.password,
					email: this.state.email,
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					type: this.state.user_type,
				})
			})
				.then(res => {
				console.log(res.status);
				if (res.status === 201) {
					res = res.json();
					res.then(json => {
						localStorage.setItem('token', json.token);
					})
				}
			})
		}
	}


	render() {
		return (
			<div className='signUp_page_div' id='signUpPage'>
				<button onClick={this.closeSignUp} className="btn signUp_page_back_arrow"><BiChevronsLeft/></button>

				<form className='signUp_form'>
					<h3>User Registration</h3>
					<div className="form-group">
						<label>First name</label>
						<input type="text" className="form-control" name='first_name' value={this.first_name}
						       onChange={this.handleInputChange} placeholder="First name"/>
					</div>


					<div className="form-group">
						<label>Last name</label>
						<input type="text" className="form-control" name="last_name" value={this.last_name}
						       onChange={this.handleInputChange} placeholder="Last name"/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" name='email' value={this.email}
						       onChange={this.handleInputChange} placeholder="Enter email"/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" name='password' value={this.password}
						       onChange={this.handleInputChange} placeholder="Enter password"/>
					</div>

					<div className="form-group">
						<label>User name</label>
						<input type="text" className="form-control" name='user_name' value={this.user_name}
						       onChange={this.handleInputChange} placeholder="User Name"/>
					</div>


					<RadioGroup className="user_radio_opt" aria-label="user_type" name="user_type"
					            value={this.user_type} defaultValue='seller'
					            onChange={this.handleInputChange}>
						<FormControlLabel value="seller" control={<Radio/>} label="Seller"/>
						<FormControlLabel value="buyer" control={<Radio/>} label="Buyer"/>
					</RadioGroup>

					<button type="submit" onClick={this.handleSubmit} className="btn btn-lg btn-block">Register</button>
				</form>
			</div>
		);
	}
}