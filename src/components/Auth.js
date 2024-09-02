// import React, { useState } from 'react';
// import { auth } from '../firebase';

// const Auth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);

//   const handleAuth = () => {
//     if (isLogin) {
//       auth.signInWithEmailAndPassword(email, password)
//         .then(() => alert('Logged in successfully!'))
//         .catch(error => alert('Error: ' + error.message));
//     } else {
//       auth.createUserWithEmailAndPassword(email, password)
//         .then(() => alert('Registered successfully!'))
//         .catch(error => alert('Error: ' + error.message));
//     }
//   };

//   return (
//     <div>
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleAuth}>{isLogin ? 'Login' : 'Register'}</button>
//       <p onClick={() => setIsLogin(!isLogin)}>
//         {isLogin ? 'Create an account' : 'Already have an account? Login'}
//       </p>
//     </div>
//   );
// };

// export default Auth;
