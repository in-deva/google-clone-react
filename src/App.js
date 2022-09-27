// import react
import React from "react";

// create component
class App extends React.Component{
	state = {
		input: ''
	}
	changeInput(typed) {
		this.setState ({
			input: typed.target.value
		})
	}
	render() {
		return (
			<div className="wrap">
				<img className="logo" src="/google.png" alt="" />
				<form>
					<input type="text" onKeyUp={e => this.changeInput(e)} autoFocus />
					<div>
						<button className="primary">Search</button>
					</div>
				</form>
			</div>
		)
	}
}

// export react
export default App;
