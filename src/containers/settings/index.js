import React, { Component, PropTypes, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import SettingsAction from '../../actions/settings';
import styles from './styles.js';

class Settings extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    discNumber: PropTypes.number,
  };

  _changeDiscNumber(text) {
    const number = text.trim();
    if (!number) {
      this.props.dispatch(SettingsAction.changeDiscNumber(null));
    }

    if (this._isNumeric(number) && (parseInt(number, 10) <= 20)) {
      this.props.dispatch(SettingsAction.changeDiscNumber(parseInt(number, 10)));
    }
  }

  _isNumeric(num) {
    return !isNaN(num);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Please input a disk number (1 - 20):</Text>
        <TextInput style={styles.numberInput} keyboardType={"numeric"} value={this.props.discNumber ? this.props.discNumber.toString(10) : ''} autoCorrect={false} autoFocus={true}
          onChangeText={this._changeDiscNumber.bind(this)} />
        <View style={styles.buttons}>
          <TouchableHighlight onPress={Actions.sketchpad}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Demo</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={Actions.sketchpad}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      );
  }
}

const mapStateToProps = (state) => ({
  discNumber: state.settings.discNumber,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    settings: bindActionCreators(SettingsAction, dispatch),
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
