import './App.css';
import Header from './Components/Header';
import LinkCard from './Components/LinkCard';
import PageIndicator from './Components/PageIndicator';
import BluePlanet from './Art/BluePlanet.svg'
import RedPlanet from './Art/RedPlanet.svg'
import BlackHole from './Art/BlackHole.svg'
import Bottom from './Art/Bottom.svg'
import Git from './Art/Git.png'
import Email from './Art/Gmail.png'


function App() {
  return (
    <div className="App">
      <div className='fixed-ui'>
        {/* connect the header buttons and page indicator in this file so the
        nav buttons and indicator can be perfectly synced. */}
        <Header />
        <PageIndicator />
      </div>
      <div className='main'>
        <div className='section top'>
          <p className='first-text'>
            Add some multi <span style={{color: '#3FA0FA'}}>line</span> splash text <span style={{color: '#EA57DB'}}>here</span>.
          </p>
          <img className='blue-planet' src={BluePlanet} alt='blue planet' />
        </div>
        <div className='section introduction'>
          <p className='second-text'>
            Paragraph of text describing <span style={{color: '#3FA0FA'}}>myself</span>, summarizing my <span style={{color: '#EA57DB'}}>experience</span> and skills.
          </p>
          <img className='red-planet' src={RedPlanet} alt='red planet' />
        </div>
        <div className='section carousel'>
          <LinkCard />
          <img className='black-hole' src={BlackHole} alt='black hole' />
        </div>
        <div className='section bottom'>
          <img className='bottom-circle' src={Bottom} alt='bottom circle' />
          <div className='icons'>
            <img src={Git} alt='github' />
            <img src={Email} alt='email' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;