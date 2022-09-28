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
		      <img className="logo" src="google.png" alt="google"/>
		      <form>
		        <input type="text" onKeyUp={e => this.props.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>{this.state.results.length} Results</small>
		    </div>
				{/* results area */}
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
