import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import Char from './components/Char/Char';

class App extends Component {
  state = {
    title: '',
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleDeleteCharTitle = (i) => {
    var text = this.state.title.split('');

    text.splice(i, 1);
    const updatedText = text.join('');
    this.setState({
      title: updatedText,
    })

  }

  render() {
    const {title} = this.state;

    const charList = this.state.title.split('').map((ch, index) => {
      return (
        <Char character={ch} key={index} clicked={()=> this.handleDeleteCharTitle(index)}/>
      )
    })
    return (
      <div className="App">
        <input type="text" value={title} onChange={(e) => this.handleChangeTitle(e)} />

        <ValidationComponent title={title.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
