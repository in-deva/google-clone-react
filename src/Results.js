// import react
import React from "react";

// create component
class Results extends React.Component{
	state = {
		input: '',
		results: [{
			title: 'JavaScript',
			description: 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
			url: 'www.W3Schools.com',
			links: [
				{
				title: 'JavaScript Introduction',
				url: '#'
			}, {
				title: 'JavaScript Functions',
				url: '#'
			}, {
				title: 'JavaScript Examples',
				url: '#'
			}]}
		]
	}
	changeInput(typed) {
		this.setState ({
			input: typed.target.value
		})
	}
	render() {
		return (
			<div>
		    <div className="header">
		      <img className="logo" src="google.png" />
		      <form>
		        <input type="text" onKeyUp={e => this.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>{this.state.results.length} Result{this.state.results.length !== 1 ? 's' : ''}</small>
		    </div>
				{/* results area */}
				{this.state.results.map((result, i) =>
					<section>
		      <span>{result.url}</span>
		      <h2><a href={result.url}>{result.title}</a></h2>
		      <p>{result.description}</p>
		      <ul>
						{result.links.map((link, i) =>
						<li key="{i}"><a href={link.url}>{link.title}</a></li>
					)}
		      </ul>
					</section>
					)}
			</div>
		)
	}
}

// export react
export default Results;
