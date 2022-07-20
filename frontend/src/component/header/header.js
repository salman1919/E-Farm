import {Component} from "react";

import {Dropdown, Navbar, NavLink,} from "react-bootstrap";
import Logo_Image from "../../assets/images/efarm_logo200.png";
import "./header.css";

import {Link} from "react-scroll";
import {Link as RLink} from "react-router-dom";
import {BiUser} from "react-icons/all";


export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			user_type: '',
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
							this.setState({
								username: json.username,
								user_type: json.type,
							});

							document.getElementById('login_nav').hidden = true;
							document.getElementById('logged_nav').hidden = false;
						})
					} else {
						document.getElementById('login_nav').hidden = false;
						document.getElementById('logged_nav').hidden = true;
					}
				})
		} else {
			document.getElementById('login_nav').hidden = false;
			document.getElementById('logged_nav').hidden = true;
		}

	}


	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({logged_in: false, username: ''});
		document.getElementById('login_nav').hidden = false;
		document.getElementById('logged_nav').hidden = true;
	};


	render() {
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
					<Navbar.Text as={Link} smooth="true" to="home">E-Farm</Navbar.Text>

					<Navbar.Toggle bsPrefix='navbar-toggler' aria-controls="basic-navbar-nav"/>

					<Navbar.Collapse id="basic-navbar-nav">
						<NavLink as={Link} smooth="true" to="home">Home</NavLink>
						<NavLink as={Link} smooth="true" to="features">Features</NavLink>
						<NavLink as={Link} smooth="true" to="about">About</NavLink>
						<NavLink as={Link} smooth="true" to="contact">Contact</NavLink>
						<NavLink className="nav_user_icon" id="login_nav" as={RLink} smooth="true" to="/login"><BiUser/>Login</NavLink>
					</Navbar.Collapse>


					<Dropdown id="logged_nav" className="logged_nav">
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							<BiUser className='logged_icon'/>
							<div className="logged_user">{this.state.username}</div>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href={"/"+this.state.user_type+"dashboard"}>Dashboard</Dropdown.Item>
							<Dropdown.Item href="/">Account</Dropdown.Item>
							<Dropdown.Item onClick={this.handle_logout}>Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
			</div>
		);
	}
}
