import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllArtists extends Component {

	constructor() {
		super()
		this.state = {
			artists: [],
			inputValue: {}
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		axios.get('/api/artists')
			.then(res => res.data)
			.then(artists => this.setState({ artists }))
	}

	handleChange(event) {
		this.setState({
			inputValue: event.target.value.toLowerCase()
		});
	}

	render() {
		
		const artists = this.state.artists.filter(artist => artist.name.toLowerCase().match(this.state.inputValue));
		// console.log(this.state.inputValue) 
		// console.log(this.state.artists)
		
		return (
			<div>
				<form className="form-group" style={{ marginTop: '20px' }}>
					<input
						className="form-control"
						placeholder="Enter artist name"
						value={this.state.inputValue}
						onChange={this.handleChange}
					/>
				</form>
				<h3>Artists</h3>
				<div className="list-group">
					{
						artists.map(artist => {
							return (
								<div className="list-group-item" key={artist.id}>
									<Link to={`/artists/${artist.id}`}>{artist.name}</Link>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}
