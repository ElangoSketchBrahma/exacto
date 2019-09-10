import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Header name='Elango' />
      <Profile />
    </div>
  );
}

export default App;
