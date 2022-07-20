import React, {Component} from "react";

import {Dropdown, Navbar,} from "react-bootstrap";
import Logo_Image from "../../assets/images/efarm_logo200.png";
import "./header.css";

import {Link} from "react-scroll";
import {BiUser} from "react-icons/all";
import {Redirect} from "react-router";
import "../header/sellerhead.css";


export default class HeaderBuyer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			logged_in: !!localStorage.getItem('token'),
		}
	}

	componentDidMount() {
		if (this.state.logged_in) {
			fetch('http://127.0.0.1:8000/api/current_user/', {
				headers: {
					Authorization: `JWT ${localStorage.getItem('token')}`
				}
			})
				.then(res => {
					if (res.status === 200) {
						res = res.json();
						res.then(json => {
							if (json.type === 'buyer') {
								this.setState({
									username: json.username,
									logged_in: true
								});
							} else {
								localStorage.removeItem('token');
								this.setState({logged_in: false});
							}
						})

					} else {
						localStorage.removeItem('token');
						this.setState({logged_in: false});
					}
				})
		} else {
			localStorage.removeItem('token');
			this.setState({logged_in: false});
		}

	}


	handle_logout = () => {
		localStorage.removeItem('token');
	};


	render() {
		if (!this.state.logged_in) {
			return (<Redirect to="/"/>)
		}
		return (
			<div className='header'>
				<Navbar variant='dark' className="headNav" expand='lg'>
					<Navbar.Brand as={Link} smooth="true" to="home">
						<img
							src={Logo_Image}
							width="80"
							height="80"
							className="d-inline-block align-top"
							alt="E-Farm Logo"/>
					</Navbar.Brand>
					<Navbar.Text as={Link} smooth="true" to="home">E-Farm | Buyer Dashboard</Navbar.Text>


					<Dropdown id="logged_nav" className="logged_nav inc">
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							<BiUser className='logged_icon'/>
							<div className="logged_user">{this.state.username}</div>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="/buyerdashboard">Dashboard</Dropdown.Item>
							<Dropdown.Item href="/">Account</Dropdown.Item>
							<Dropdown.Item onClick={this.handle_logout} href="/">Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
			</div>
		);
	}
}
