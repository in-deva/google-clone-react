// import react
import React from "react";

// create component
class Result extends React.Component{
	state = {
		results: this.props.results
	}
	render() {
		return (
			<div>
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
export default Result
