import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './component/Timer'; 
import DigitalClock from './component/DigitalClock';
function App() {

  return (
    <>
  <div className="header">
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>

  <h1 className="title">Vite + React</h1>
  <div className="components-container">
    <Timer initialTime={60} />
    <DigitalClock />
  </div>
</>
  )
  
}

export default App
