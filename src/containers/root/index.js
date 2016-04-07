import React, { Component } from "react-native";
import { Provider } from "react-redux/native";
import { Scene, Router } from 'react-native-router-flux';

import configureStore from "../../store/configure-store";
import Welcome from '../../containers/welcome';
import Settings from '../../containers/settings';
import Sketchpad from '../../containers/sketchpad';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => (
        <Router>
          <Scene key="root" hideNavBar="{true}">
              <Scene key="welcome" component={Welcome}/>
              <Scene key="settings" component={Settings}/>
              <Scene key="Sketchpad" component={Sketchpad} />
          </Scene>
        </Router>
      )}
      </Provider>
      );
  }
}

export default Root;
