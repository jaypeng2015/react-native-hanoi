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
    stepsMoved: PropTypes.array,
  };

  componentDidMount() {
    const { discNumber, mode, dispatch } = this.props;
    if (mode === 'auto') {
      dispatch(SketchpadAction.startCalculating());
      setTimeout(() => {
        const steps = hanoi(discNumber);
        dispatch(SketchpadAction.finishCalculating(steps));
        this.interval = setInterval(this._tick.bind(this), 500 / (discNumber > 2 ? (discNumber - 2) : 1));
      }, 100);
    }
  }

  _tick() {
    const { stepsRemaining, dispatch } = this.props;
    dispatch(SketchpadAction.moveDisc(stepsRemaining));
    if (stepsRemaining.length === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { discNumber, mode, stepsRemaining, calculating, stepsMoved } = this.props;
    const currentStep = stepsMoved.length > 0 ? stepsMoved[stepsMoved.length - 1] : null;
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          {`This is the sketchpad. ${discNumber} disks ${mode}.`}
        </Text>
        {calculating && <Image style={styles.progress} source={require('../../images/progress-bar.gif')} />}
        {!calculating && <Text style={{ color: 'white' }}>
                           {`At least ${Math.pow(2, discNumber) - 1} steps are required.`}
                         </Text>}
        {!calculating && stepsRemaining.length > 0 && <Text style={{ color: 'white' }}>
                                                        {`${stepsRemaining.length} steps to go!!`}
                                                      </Text>}
        {!calculating && stepsRemaining.length > 0 && <Text style={{ color: 'white' }}>
                                                        {`You have moved ${stepsMoved.length} steps`}
                                                      </Text>}
        {currentStep && <Text style={{ color: 'white' }}>
                          {`Current step: ${currentStep}`}
                        </Text>}
        {!calculating && stepsRemaining.length === 0 && (<Text style={{ color: 'white' }}>
                                                           {'Job is done!!'}
                                                         </Text>)}
      </View>
      );
  }
}

const mapStateToProps = (state) => ({
  discNumber: state.settings.discNumber,
  mode: state.settings.mode,
  stepsRemaining: state.sketchpad.stepsRemaining,
  stepsUsed: state.sketchpad.stepsUsed,
  calculating: state.sketchpad.calculating,
  stepsMoved: state.sketchpad.stepsMoved,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    sketchpad: bindActionCreators(SketchpadAction, dispatch),
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);
