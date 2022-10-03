// import react
import React from "react"
import Search from "./Search"
import Results from "./Results"
import axios from 'axios'

// create component
class App extends React.Component{
	state = {
		input: '',
		results: [{
			title: 'fuuuuuuu',
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
	changeInput = (typed) => {
		this.setState ({
			input: typed.target.value
		})
	}
	getResults = async (e) => {
		e.preventDefault()
		// !!! build whole thing with template literal
  	let results = await axios.get(process.env.REACT_APP_SERVER_URL + '/results?search=java')
		console.log(results)
	}
	render() {
		return (
			<div>
				{this.state.results.length ?
					<Results
					results={this.state.results} changeInput={this.changeInput}
					getResults={this.getResults}/> :
					<Search
					changeInput={this.changeInput}
					getResults={this.getResults} />}
			</div>
		)
	}
}

// export react
export default App
