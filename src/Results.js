// import react
import React from "react"
import Result from "./result"

class Results extends React.Component{
	render() {
		return (
			<div>

				<div className="header">
					<img className="logo" src="google.png" />
					<form onSubmit={e => this.props.getResults(e)}>
						<input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
						<button className="primary">Search</button>
					</form>
				</div>

					<small className="small">{this.props.results.length} Result{this.props.results.length !== 1 ? 's' : ''}</small>

					<Result results={this.props.results} />

			</div>
		)
	}
}

export default Results