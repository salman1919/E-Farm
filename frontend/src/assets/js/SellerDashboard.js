import {Component} from "react";
import "../css/SellerDash.css";
import Tile from "../../component/productTile/Tile";
import {Redirect} from "react-router";
import "../../component/header/sellerhead.css";

export default class SellerDashboard extends Component {

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
							if (json.type === 'seller') {
								this.setState({
									user_id: json.id
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


		fetch('http://127.0.0.1:8000/api/getproduct/', {
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

					<p>Add New Product</p>
					<hr/>

					<form>

						<div className="s_row">
							<lable>Enter Product Name</lable>
							<input type='text' className='form-control' onChange={this.handleInputChange} name="pname" value={this.pname}/>
						</div>

						<div className="s_row">
							<lable>Enter Quantity (KG)</lable>
							<input type='number' className='form-control' onChange={this.handleInputChange} name="quantity"
							       value={this.quantity}/>
						</div>

						<div className="s_row">
							<lable>Enter Base Price</lable>
							<input type="number" className='form-control' onChange={this.handleInputChange} name='price' value={this.price}/>
						</div>

						<div className="s_row">
							<lable>Post Expiry Date</lable>
							<input type="date" className='form-control' onChange={this.handleInputChange} name="expiry" value={this.expiry}/>
						</div>

						<div className="s_row description">
							<lable>Descriptions</lable>
							<textarea type="textbox" className='form-control' onChange={this.handleInputChange} name="descrip"
							          value={this.descrip}/>
						</div>

						<hr/>
						<div className="s_form_control">
							<button type='reset' className="btn s_reset">Reset</button>
							<button type='submit' onClick={this.handle_login} className="btn s_submit">Submit
							</button>
						</div>
					</form>

				</div>

				<div className='s_inner current'>
					<p>Current Listing</p>
					<Tile dict={this.state.dict}/>

				</div>

			</div>
		)
	}
}