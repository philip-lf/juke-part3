import React, { Component } from 'react'


export default class NewPlaylist extends Component {
	constructor( props ) {
		super(props)
		this.state = {
			value: '', submitbool: '', alertInfo: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		axios.post('/api/playlists', {console.log('hihihi')})
			.then(res => res.data)
			.then(result => {
				console.log(result) // response json from the server!
			})
	}

	handleSubmit( event ) {
		console.log(this.state.value)
	}

	handleChange( event ) {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<div className="well">
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>New Playlist</legend>
						<div className="form-group">
							<label className="col-xs-2 control-label">Name</label>
							<div className="col-xs-10">
								<input className="form-control" type="text" value={this.state.value}
								       onChange={this.handleChange}
								       disabled={this.state.value.length > 16 ? 'disabled' : ''}/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-xs-10 col-xs-offset-2">
								<button type="submit" className="btn btn-success">
									Create Playlist
								</button>
								<div
									className="alert alert-warning">{this.state.value.length === 0 ? 'type query' : 'press submit to create playlist'} {this.state.value.length === 16 ? 'query too long, refresh page and try again' : ':)'}</div>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}

