import React from 'react';
import './App.css'

const App = () => {
  return (
    <div className='ichiban-kuji__main-container'>
      <div className='ichiban-kuji__language-button'>
        <div className='ichiban-kuji__traditional-chinese-button'>繁體中文</div>
        <div className='ichiban-kuji__english-button'>English</div>
      </div>
      <h1 className='ichiban-kuji__main-title'>一番くじONLINE</h1>
      <div className='ichiban-kuji__enter-button'>按此進入</div>
    </div>
  );
};

export default App;
