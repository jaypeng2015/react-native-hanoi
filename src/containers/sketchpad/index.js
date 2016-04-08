import React, { Component, PropTypes, Image, View, Text } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import styles from './styles';
import SketchpadAction from '../../actions/sketchpad';
import hanoi from '../../services/hanoi';

class Sketchpad extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    discNumber: PropTypes.number,
    mode: PropTypes.string,
    stepsRemaining: PropTypes.array,
    calculating: PropTypes.bool,
  };

  componentDidMount() {
    const { discNumber, mode, dispatch } = this.props;
    if (mode === 'auto') {
      dispatch(SketchpadAction.startCalculating());
      setTimeout(() => {
        const steps = hanoi(discNumber);
        dispatch(SketchpadAction.finishCalculating(steps));
      }, 100);
    }
  }

  render() {
    const { discNumber, mode, stepsRemaining, calculating } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          {`This is the sketchpad. ${discNumber} disks ${mode}.`}
        </Text>
        {calculating && <Image style={styles.progress} source={require('../../images/progress-bar.gif')} />}
        {!calculating && stepsRemaining.length > 0 && <Text style={{ color: 'white' }}>
                                                        {`${stepsRemaining.length} steps to go!!`}
                                                      </Text>}
        {!calculating && stepsRemaining.length === 0 && <Text style={{ color: 'white' }}>
                                                          {`Job is done!!`}
                                                        </Text>}
      </View>
      );
  }
}

const mapStateToProps = (state) => ({
  discNumber: state.settings.discNumber,
  mode: state.settings.mode,
  stepsRemaining: state.sketchpad.stepsRemaining,
  calculating: state.sketchpad.calculating,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    sketchpad: bindActionCreators(SketchpadAction, dispatch),
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);
