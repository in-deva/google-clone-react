// import react
import React from "react";

// create component
class App extends React.Component {
  state = {
    input: ""
  };
  changeInput(typed) {
    this.setState({
      input: typed.target.value
    });
  }
  render() {
    return (
      <div class="wrap">
        <img class="logo" src="/google.png" alt="" />
        <form>
          <input type="text" autoFocus onKeyUp={e => this.changeInput(e)} />
          <div>
            <button class="primary">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

// export react
export default App;
