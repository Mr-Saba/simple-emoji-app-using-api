import React from 'react';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  
  // const handleMainPage = (value) => {
  //   const filteredEmojies = filterEmojies(value)
  //   return filteredEmojies
  // }

  
  return (
    <React.Fragment>
      <header className="Header">
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="cat"/>
        <div>Emoji Search</div>
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" alt="cat"/>
      </header>
      <div className="Layout">
        <MainPage />
      </div>
    </React.Fragment>
  );
}

export default App;
