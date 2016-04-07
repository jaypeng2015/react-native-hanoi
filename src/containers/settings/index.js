import React, { Component, View, Text, TouchableHighlight } from "react-native";

import styles from './styles.js';

class Root extends Component {

  _onPressButton() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the settings page.</Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </View>
        </TouchableHighlight>
      </View>
      );
  }
}

export default Root;
