import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  const [page, setPage] = useState('Home');
  const pageSwitchHandler = (pageName) =>{
    setPage(pageName);
  }


  return (
    <div className="App">
      <div>

        <div><button onClick={()=>{pageSwitchHandler('Home')}}>Home Page</button></div>
        <div><button onClick={()=>{pageSwitchHandler('Contact')}}>Contact Page</button></div>
        <div><button onClick={()=>{pageSwitchHandler('News')}}>News Page</button></div>
     
      </div>
      {page === 'Home' && (<Home/>)}
      {page === 'Contact' && (<Contact/>)}
      {page === 'News' && (<News/>)}
      
      
        
    </div>
  );
}

export default App;
