import './App.css';
import Navbar from './navbar';

function App() {
  const title = 'Welcome to the New Blog';
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
      </div>
    </div>
  );
}

export default App;
