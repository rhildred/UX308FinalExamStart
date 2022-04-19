import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.questions = [
      {text: "What is your name?"},
      {text: "What color is the sky?"}
    ];
    this.nCurrentQuestion = 0;
    this.state = {
      currentQuestion: this.questions[this.nCurrentQuestion]
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.currentQuestion.text}</Text>
        <button onClick={this.handleNextButtonClicked.bind(this)}>Next</button>
      </View>

    );
  }
  handleNextButtonClicked() {
    if(this.nCurrentQuestion < this.questions.length - 1){
      this.nCurrentQuestion += 1;
      
      this.setState({

        currentQuestion: this.questions[this.nCurrentQuestion]

      });

    }
  }

}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Question />
      </View>
    );
  }
}

// This a method of making cleaner code. It acts similarly to a CSS file would in HTML. But we won’t use it much in this tutorial
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App