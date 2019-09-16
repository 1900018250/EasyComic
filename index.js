/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native'


// 忽略某些警告
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: ViewPagerAndroid has',
    'Debugger and device times'
  ])
  

AppRegistry.registerComponent(appName, () => App);
