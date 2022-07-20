import {Component} from "react";
import "../css/SellerDash.css";
import Tile from "../../component/productTile/Tile";
import {Redirect} from "react-router";

export default class BuyerDashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dict: null,
			user_id: 0,
			pname: '',
			price: 0,
			quantity: 0,
			expiry: '',
			descrip: '',
			logged_in: !!localStorage.getItem('token'),
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handle_login = this.handle_login.bind(this);
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
									user_id: json.id,
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

		fetch('http://127.0.0.1:8000/api/getallproduct/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				seller: this.state.user_id
			})
		}).then(res => {
			if (res.status === 200) {
				res = res.json();
				res.then(json => {
					this.setState({
						dict: json.event_list
					})
				})
			}
		})

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

		fetch('http://127.0.0.1:8000/api/addproduct/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				seller: this.state.user_id,
				name: this.state.pname,
				price: this.state.price,
				quantity: this.state.quantity,
				expiry: this.state.expiry,
				description: this.state.descrip,
			}),
		})
	}


	render() {
		if (!this.state.logged_in){
			return (<Redirect to='/'/>)
		}
		return (
			<div className='s_dash_main'>
				<div className='s_inner newOrder'>

					<p>Recent Product</p>

					<Tile dict={this.state.dict}/>


				</div>

				<div className='s_inner current'>
					<p>Current Listing</p>
				</div>

			</div>
		)
	}
}