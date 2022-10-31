import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';


function App() {

  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Is logged in
        console.log(userAuth)
      }
      else {
        //Is logged out
      }
    })

    //@@@@clean up function
    // return unsubscribe;
    return unsubscribe;

  }, [])




  return (
    <div className="app">
      {
        !user ? <LoginScreen /> : (
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </BrowserRouter>
        )
      }

    </div>
  );
}

export default App;
