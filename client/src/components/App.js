import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pages from './pages/Pages';
import { setUser,  allUsers} from '../store/auth';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // Check to see if there is a user logged in before loading the application
  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user));
        // if using Redux, add current user info to the store
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);

  useEffect(() => {
    dispatch(allUsers())
  }, [dispatch])

  if (loading) return null;

  return (
    <BrowserRouter>
        <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
