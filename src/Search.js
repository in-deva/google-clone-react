// import react
import React from "react";

// create component
class Search extends React.Component{
	render() {
		return (
			<div className="wrap">
				<img className="logo" src="/google.png" alt="" />
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

// export react
export default Search;
