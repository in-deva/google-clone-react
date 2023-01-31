// import react
import React from "react"
import Search from "./Search"
import Results from "./Results"
import axios from 'axios'

import Content from './assets/content.json'

// create component
class App extends React.Component{
	state = {
		input: '',
		active: 'search'
	}

	changeInput = (typed) => {
		this.setState ({
			input: typed.target.value
		})
	}

	getResults = async (e) => {
		console.log('here');
		e.preventDefault()
		this.setState ({
			active: 'results'
		})
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
					/> 
				}
	
			</div>
		)
	}
}

// export react
export default App
