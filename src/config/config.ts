import firebase from 'firebase';

export const initializeFirebase = () => {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyBuqsURYN--OCas0QoQSs2GQDzO1U0O9u8',
    authDomain: 'mekoom-54844.firebaseapp.com',
    databaseURL: 'https://mekoom-54844.firebaseio.com',
    projectId: 'mekoom-54844',
    storageBucket: 'mekoom-54844.appspot.com',
    messagingSenderId: '395378633157',
    appId: '1:395378633157:web:1393f787d1a27e679043ac',
    measurementId: 'G-LHK61HCMH9',
  };

  firebase.initializeApp(firebaseConfig);
};
