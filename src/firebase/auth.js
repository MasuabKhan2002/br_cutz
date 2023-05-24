import { auth } from './config.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

function LogInAuth(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default LogInAuth;