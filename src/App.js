// import react
import React from "react"
import Search from "./Search"
import Results from "./Results"

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
		// console.log(typed.target.value)
		this.setState ({
			input: typed.target.value
		})
		console.log(this.state.input);
	}
	render() {
		return (
			<div>
				<Results results={this.state.results} changeInput={this.changeInput}/>
			</div>
		)
	}
}

// export react
export default App
