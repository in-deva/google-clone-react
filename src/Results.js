// import react
import React from "react";

// create component
class Results extends React.Component{
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
			<div>
		    <div className="header">
		      <img className="logo" src="google.png" />
		      <form>
		        <input type="text" onKeyUp={e => this.changeInput(e)} autoFocus />
		        <button className="primary">Search</button>
		      </form>
		    </div>
		    <div className="small">
		      <small>37 Results</small>
		    </div>
				{/* results area */}
		    <section>
		      <span>www.w3school.com</span>
		      <h2><a href="#">JavaScript Tutorial - W3Schools</a></h2>
		      <p>
		        Well organized and easy to understand Web building tutorials with lots
		        of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python,
		        Bootstrap, Java
		      </p>
		      <ul>
		        <li><a href="#">JavaScript Introduction</a></li>
		        <li><a href="#">JavaScript Functions</a></li>
		        <li><a href="#">JavaScript Examples</a></li>
		      </ul>
		    </section>
		    <section>
		      <span>developer.mozilla.org</span>
		      <h2><a href="#">JavaScript | MDN</a></h2>
		      <p>
		        JavaScript (JS) is lightweight, interpreted, or just-in-time compiled
		        programming language with first-className functions. While it is most
		        well-known as the scripting language for Web page CouchDB and Adobe
		        Acrobat.
		      </p>
		      <ul>
		        <li><a href="#">JavaScript Operator</a></li>
		        <li><a href="#">JavaScript Code</a></li>
		        <li><a href="#">JavaScript Meaning</a></li>
		      </ul>
		    </section>
		    <section>
		      <span>en.wikipedia.org</span>
		      <h2><a href="#">JavaScript - Wikipedia</a></h2>
		      <p>
		        JavaScript often abbreviated as JS, is a programming language that
		        conforms to the ECMAScript specification. JavaScript is high-level,
		        often just-in-time.
		      </p>
		      <ul>
		        <li><a href="#">JavaScript Online</a></li>
		        <li><a href="#">JavaScript Definition</a></li>
		      </ul>
		    </section>
			</div>
		)
	}
}

// export react
export default Results;
