import React from "react"

class Search extends React.Component{
	render() {
		return (
			<div id='search'>
				<img id="logo" src="/google.png" alt="" />
				<form onSubmit={e => this.props.getResults(e)}>
					<input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
					<div>
						<button className="primary">Search</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Search