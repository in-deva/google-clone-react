// import react
import React from "react"
import Result from "./Result"

// create component
class Results extends React.Component{
	render() {
		return (
			<div>
		    <div className="header">
		      <img className="logo" src="google.png" />
					{/* search form */}
					{/* FORM ACTIONS NEED UPDATING */}
		      <form>
		        <input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>{this.props.results.length} Result{this.props.results.length !== 1 ? 's' : ''}</small>
		    </div>
				{/* results */}
				<Result results={this.props.results} />
			</div>
		)
	}
}

// export react
export default Results
