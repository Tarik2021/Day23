import React, {Component} from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };
  handleSumbit = (character) => {
    this.setState({characters: [...this.state.characters, character]});
  };

  removeCharacter = (index) => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const {characters} = this.state;

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
  render() {
    return <Form handleSubmit={this.handleSubmit} />;
  }
}

export default App;
