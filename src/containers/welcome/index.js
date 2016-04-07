import React, { Component, View, Text, TouchableHighlight } from "react-native";
import { Actions } from 'react-native-router-flux'

import styles from './styles.js';

class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"The Tower of Hanoi"}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.desc}>{"The Tower of Hanoi is a mathematical game or puzzle. It consists of three rods, and a number of disks of different sizes which can slide onto any rod. \
            The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape."}</Text>
          <Text style={styles.desc}>{"The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:"}</Text>
          <Text style={styles.desc}>{"    1) Only one disk can be moved at a time."}</Text>
          <Text style={styles.desc}>{"    2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack."}</Text>
          <Text style={styles.desc}>{"    3) No disk may be placed on top of a smaller disk."}</Text>
          <Text style={styles.desc}>{"The minimum number of moves required to solve a Tower of Hanoi puzzle is 2n - 1, where n is the number of disks."}</Text>
        </View>
        <TouchableHighlight onPress={Actions.settings}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </TouchableHighlight>
      </View>
      );
  }
}

export default Welcome;
