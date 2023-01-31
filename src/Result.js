import React from "react"

class Result extends React.Component{
	render() {
		return (
			<div>
				{this.props.results.map((result, i) =>
					<section className='result' key={i}>
						<span>{result.url}</span>
						<h2><a href={result.url} target="_blank">{result.title}</a></h2>
						<p>{result.description}</p>
						<ul>
							{result.links.map((link, i) =>
								<li key={i}><a href={link.url}>{link.title}</a></li>
							)}
						</ul>
					</section>
				)}
			</div>
		)
	}
}

export default Result