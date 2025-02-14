import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';

function App() {
  const name = "Muralha Nitx";
  const imgUrl = "" //"https://cdn-icons-png.flaticon.com/512/1969/1969300.png";
  const catImgUrl = "" //"https://wallpapers.com/images/hd/thumbs-up-cat-meme-7avdmx4bbkkqcrj2.jpg";

  return (
    <div className="App">
      <header className="App-header">
        <img src={ imgUrl } className="App-logo" alt="logo" />
        <h1>
          Good night Tibianos!
        </h1>
        <p>Sr. { name }!</p>
        <List />
        <HelloWorld />
        <SayMyName value="Test"/>
        <Person name="Alex" age="25" occupation="Developer" picture={ catImgUrl } />
      </header>
    </div>
  );
}

export default App;
