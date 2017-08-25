import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
	apiKey: "",
	authDomain: "",
	databaseURL: ""
});

const base = Rebase.createClass(app.database());

export default base;