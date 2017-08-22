import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
	apiKey: "AIzaSyDoIDE1xJ5EoiVhDxi42VtBW5FUb9kctmU",
	authDomain: "react-chat-app-c03ce.firebaseapp.com",
	databaseURL: "https://react-chat-app-c03ce.firebaseio.com"
});

const base = Rebase.createClass(app.database());

export default base;