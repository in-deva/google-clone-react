// import react
import React from "react"

import Search from "./search"
import Results from "./results"

import content from './assets/content.json'

class App extends React.Component{
	state = {
		input: '',
		active: 'search',
		results: '',
	}

	changeInput = (typed) => {
		this.setState ({ input: typed.target.value.toLowerCase() })
	}

	getResults = async (e) => {
		e.preventDefault() // prevents form being submitted (reloads page)
		if (this.state.active == 'search') { this.setState ({ active: 'results' }) } // unmounts search component, mounts results component
		// filtering content
			// title includes input
		let filteredContent = content.filter(item => item.title.toLowerCase().includes(this.state.input))
		this.setState ({ results: filteredContent })
			// TODO - links title includes
			// TODO - description includes
	}

	render() {
		return (
			<div>
				{this.state.active == 'search' ?
					<Search
						changeInput={this.changeInput}
						getResults={this.getResults} 
					/> 
					:
					<Results
						changeInput={this.changeInput}
						getResults={this.getResults}
						results={this.state.results}
					/> 
				}
			</div>
		)
	}
}

export default App