import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import configureStore from '../store/configureStore';
import Pages from './pages/Pages';
import { setUser } from '../store/auth';

const store = configureStore();

if(process.env.NODE_ENV !== 'production'){
  window.store = store;
}

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // Check to see if there is a user logged in before loading the application
  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        console.log(res.data);
        dispatch(setUser(res.data.user));
        // if using Redux, add current user info to the store
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);

  if (loading) return null;

  return (
    <BrowserRouter>
        <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
