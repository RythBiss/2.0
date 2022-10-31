import './App.css';
import Header from './Components/Header';
import PageIndicator from './Components/PageIndicator';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <PageIndicator /> */}
      <div className='fixed-ui'>
        <Header />
        <PageIndicator />
      </div>
    </div>
  );
}

export default App;