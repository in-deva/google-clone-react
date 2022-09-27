// import react
import React from 'react'

// create component
class App extends React.Component{
	state = {}
	render() {
		return (
			<div class="wrap">
				<img class="logo" src="/google.png" alt="" />
				<form>
					<input type="text" />
					<div>
						<button class="primary">Search</button>
					</div>
				</form>
			</div>
		)
	}
}

// export react
export default App
