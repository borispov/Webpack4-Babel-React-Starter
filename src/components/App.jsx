import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Header>
        WEBPACK4-BABEL7,REACT16,REDUX,SEMANTIC-UI!
      </Header>

    )
  }
}

export default App
