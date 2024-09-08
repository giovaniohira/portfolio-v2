import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import MouseCircleEffect from './components/MouseCircleEffect';

function App() {
  return (
    <div className="App">
      <MouseCircleEffect />
      <Header />
      <Content />
    </div>
  );
}

export default App;
