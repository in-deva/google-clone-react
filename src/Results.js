// import react
import React from "react";

// create component
class Results extends React.Component{
	state = {
		results: this.props.results
	}
	render() {
		return (
			<div>
		    <div className="header">
		      <img className="logo" src="google.png" />
					{/* search form */}
		      <form>
		        <input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>{this.state.results.length} Result{this.state.results.length !== 1 ? 's' : ''}</small>
		    </div>
				{/* results */}
				<Result />
			</div>
		)
	}
}

// export react
export default Results;
