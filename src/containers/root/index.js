import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import { Scene, Router } from 'react-native-router-flux';

import configureStore from '../../store/configure-store';
import Welcome from '../../containers/welcome';
import Settings from '../../containers/settings';
import Sketchpad from '../../containers/sketchpad';

const store = configureStore();

class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        {() => (
           <Router>
             <Scene key="root" hideNavBar="{true}">
               <Scene key="welcome" component={Welcome} type="replace" />
               <Scene key="settings" component={Settings} type="replace" />
               <Scene key="sketchpad" component={Sketchpad} type="replace" />
             </Scene>
           </Router>
         )}
      </Provider>
      );
  }
}

export default Root;
