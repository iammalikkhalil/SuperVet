// index.js or App.js
import './gesture-handler';
import 'react-native-reanimated';


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
