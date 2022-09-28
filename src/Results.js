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
					{/* to do
	PART 1
link form through onSubmit to call a method
overrideDefault (something like that)
use the form to change states
Test it all works
	PART 2
make form input value update the state onKeyUp
make form submit reset input value
	BONUS
make input value and state linked/looped and working
					*/}
		      <form>
		        <input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>{this.state.results.length} Result{this.state.results.length !== 1 ? 's' : ''}</small>
		    </div>
				{/* results */}
				{/* to do
make this a controller called Result.js
	cut-paste block
import it into this file
pass relevant data to the child Result.js
	make it work using this.prod
				*/}
				{this.state.results.map((result, i) =>
					<section>
			      <span>{result.url}</span>
			      <h2><a href={result.url}>{result.title}</a></h2>
			      <p>{result.description}</p>
			      <ul>
							{result.links.map((link, i) =>
							<li key={i}><a href={link.url}>{link.title}</a></li>)}
			      </ul>
					</section>
					)}
			</div>
		)
	}
}

// export react
export default Results;
