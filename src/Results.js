// import react
import React from "react"
import Result from "./result"

class Results extends React.Component{
	render() {
		return (
			<div id='results'>

				<div id="header">
					<img id="logo" src="google.png" />
					<form onSubmit={e => this.props.getResults(e)}>
						<input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
						<button id="search">Search</button>
					</form>
				</div>

				<div id='body'>

					<div id='result-count'>{this.props.results.length} Result{this.props.results.length !== 1 ? 's' : ''}</div>

					<Result results={this.props.results} />
				
				</div>

			</div>
		)
	}
}

export default Results