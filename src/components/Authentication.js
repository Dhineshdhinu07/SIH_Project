// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id"
// };

// initializeApp(firebaseConfig);
// const auth = getAuth();

// const Authentication = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         console.log('User logged in:', userCredential.user);
//       })
//       .catch(error => console.error('Error logging in:', error));
//   };

//   const handleRegister = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         console.log('User registered:', userCredential.user);
//       })
//       .catch(error => console.error('Error registering:', error));
//   };

//   return (
//     <div>
//       <h2>User Authentication</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Authentication;
