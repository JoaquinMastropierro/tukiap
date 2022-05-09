import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK4Y8paJWwhevP5i87LGc_oqTtNryUgWg",
    authDomain: "tukiap-33db6.firebaseapp.com",
    projectId: "tukiap-33db6",
    storageBucket: "tukiap-33db6.appspot.com",
    messagingSenderId: "854893849025",
    appId: "1:854893849025:web:c701a6f180f0597060e740",
    measurementId: "G-MM0E8MBJ3N"
  };

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}


