import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import 'firebase/firestore';
// import VueFire from 'vuefire'
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

var configOptions = {
  apiKey: "AIzaSyBu2uBO3cES9tOxTz5Qt2lXMTbuezS6MCE",
  authDomain: "paper-rock-scizzors.firebaseapp.com",
  databaseURL: "https://paper-rock-scizzors.firebaseio.com",
  projectId: "paper-rock-scizzors",
  storageBucket: "paper-rock-scizzors.appspot.com",
  messagingSenderId: "852125977336",
  appId: "1:852125977336:web:582cea0c921eac86e7c90d",
  measurementId: "G-8VCJBPT310"
};

// Vue.use(VueFire);
firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

// export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");