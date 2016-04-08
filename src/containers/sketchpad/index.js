import React, { Component, PropTypes, View, Text } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import styles from './styles';
import SketchpadAction from '../../actions/sketchpad';

class Sketchpad extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    discNumber: PropTypes.number,
    mode: PropTypes.string,
  };

  render() {
    const { discNumber, mode } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          {`This is the sketchpad. ${discNumber} disks ${mode}.`}
        </Text>
      </View>
      );
  }
}

const mapStateToProps = (state) => ({
  discNumber: state.settings.discNumber,
  mode: state.settings.mode,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    sketchpad: bindActionCreators(SketchpadAction, dispatch),
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);
