import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Question extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.question.text}</Text>
      </View>

    );
  }
}

class App extends React.Component {
  constructor(props) {

    const questions = [
      {text: "What is your name?"},
      {text: "What color is the sky?"}
    ] 
    super(props);

    this.state = {

      question: questions[1]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Question question={this.state.question} />
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