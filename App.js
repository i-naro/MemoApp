import { createAppContainer,createStackNavigator } from 'react-navigation';
import firebase from "firebase";

import MemoCreateScreen from './src/screens/MemoCreateScreen'; 
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import ENV from "./env.json"

require("firebase/firestore");

const config = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STRAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: MemoListScreen },
  MemoCreate: { screen: MemoCreateScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Signup: { screen: SignUpScreen },
},{
  initialRouteName: "Login",
  }
);

const App = createAppContainer(AppNavigator);

export default App;