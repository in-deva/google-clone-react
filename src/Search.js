// import react
import React from "react";

// create component
class Search extends React.Component{
	render() {
		return (
			<div className="wrap">
				<img className="logo" src="/google.png" alt="" />
				<form onSubmit=(this.props.filterResults)>
					<input type="text" onKeyUp={e => this.changeInput(e)} autoFocus />
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
